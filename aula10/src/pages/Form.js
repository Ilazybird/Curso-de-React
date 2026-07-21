import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'

export const Form = () => {
    
    const schema = yup.object().shape({
        fullName: yup.string().required("Your full name is Required"),
        email: yup.string().email().required("Your email is not valid"),
        age: yup.number().positive().integer().min(18).required("You must pass a valid age"),
        password: yup.string().min(8).max(12).required("Your password don't attend the minimals requires"),
        confirmPassWord: yup.string().oneOf([yup.ref("password"), null], "Passwords don't match").required()
    })
    
    const { register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
    });
    
    const onSubmit = (data) => {
        console.log(data)
    };

    return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Full name..." {...register("fullName")}/>
        <p>{errors.fullName?.message}</p>
        <input type="tex" placeholder="Email..." {...register("email")}/>
        <p>{errors.email?.message}</p>
        <input type="number" placeholder="Age..." {...register("age")}/>
        <p>{errors.age?.message}</p>
        <input type="password" placeholder="Password..." {...register("password")}/>
        <p>{errors.password?.message}</p>
        <input type="password" placeholder="Confirm Password" {...register("confirmPassWord")}/>
        <p>{errors.confirmPassWord?.message}</p>
        <input type="submit" placeholder=""/>
    </form>
   )
}