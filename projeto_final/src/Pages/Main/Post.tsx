import { Post as IPost } from "./Home"
import { addDoc, getDocs, collection, query, where, getDoc, deleteDoc, doc } from "firebase/firestore"
import { db, auth } from "../../Config/Firebase"
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect, useState } from "react";

interface Props {
    post: IPost,
}

interface Like {
    userId: string
}

export const Post = (props: Props) => {
    const { post } = props

    const [likes, setLikes] = useState<Like[] | null>(null);

    const likesRef = collection(db, "likes")

    const likesDoc = query(likesRef, where("postId", "==", post.id))

    const [user] = useAuthState(auth)

    const getLikes = async () => {
        const data = await getDocs(likesDoc)
        setLikes(data.docs.map((doc) => ({ userId: doc.data().userId })));
    }

    const addLike = async () => {
    try {
        await addDoc(likesRef, { userId: user?.uid, postId: post.id });
        
        if (user) {
            setLikes((prev) =>
                prev ? [...prev, { userId: user.uid }] : [{ userId: user.uid }]
            );
        }
    } catch (error) {
        console.log(error);
    }
};

    const removeLike = async () => {
    try {
        // 1. Encontra o like no banco de dados
        const likeToDeleteQuery = query(
            likesRef, 
            where("postId", "==", post.id), 
            where("userId", "==", user?.uid)
        );
        const likeToDeleteData = await getDocs(likeToDeleteQuery);
        
        if (!likeToDeleteData.empty) {
            const likeId = likeToDeleteData.docs[0].id;
            const likeToDelete = doc(db, "likes", likeId);
            
            await deleteDoc(likeToDelete);
            
            if (user) {
                setLikes((prev) => 
                    prev ? prev.filter((like) => like.userId !== user.uid) : null
                );
            }
        }
    } catch (error) {
        console.log(error);
    }
};

    const hasUserLiked = likes?.find((like) => like.userId === user?.uid)

    useEffect(() => {
        getLikes();
    }, [])

    return (
        <div>
            <div className="title">
                <h1>{post.title}</h1>
            </div>
            <div className="body">
                <p>{post.description}</p>
            </div>

            <div className="footer">
                <p>@{post.username}</p>
                <button onClick={hasUserLiked ? removeLike : addLike}> {hasUserLiked ? <>&#128078;</> : <>&#128077;</>} </button>
                {likes && <p>Likes: {likes.length}</p>}
            </div>
        </div>
    );
}