import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { addDoc, collection } from 'firebase/firestore'
import { db, auth } from '../../Config/Firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useNavigate } from 'react-router-dom';

export interface CreateFormData {
    title: string,
    description: string,
};

export const Form = () => {

    const [user] = useAuthState(auth);

    const userNavigate = useNavigate();

    const schema = yup.object().shape({
        title: yup.string().required("You must add a Title"),
        description: yup.string().required("You must add a Description"),
    })

    const { register, handleSubmit, formState: { errors } } = useForm<CreateFormData>({
        resolver: yupResolver(schema),
    })

    const postsRef = collection(db, "posts")

    const onCreatePost = async (data: CreateFormData) => {
        await addDoc(postsRef, {
            ...data,
            username: user?.displayName,
            userId: user?.uid,
        })

        userNavigate("/");
    }

    return (
        <form onSubmit={handleSubmit(onCreatePost)}>
            <input placeholder='Title' {...register("title")} />
            <p style={{ color: 'red' }}>{errors.title?.message}</p>
            <textarea placeholder='Description' {...register("description")} />
            <p style={{ color: 'red' }}>{errors.description?.message}</p>
            <input type='submit'/>
        </form>
    );
}