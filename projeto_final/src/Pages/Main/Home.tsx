import { getDocs, collection } from "firebase/firestore";
import { db } from "../../Config/Firebase";
import { useEffect, useState } from "react";
import { Post } from "./Post";

export interface Post {
    id: string;
    userId: string;
    title: string;
    description: string;
    username: string;
}

export const Home = () => {
    const [postList, setPostList] = useState<Post[] | null>(null);
    const postsRef = collection(db, "posts")

    const getPost = async () => {
        const data = await getDocs(postsRef);
        setPostList(data.docs.map((doc) => ({...doc.data(), id: doc.id})) as Post[]);
    }

    useEffect(() => {
        getPost();
    }, []);

    return (
        <div>
            <h1>{postList?.map((post) => <Post post={post}/>)}</h1>
        </div>
    );
}