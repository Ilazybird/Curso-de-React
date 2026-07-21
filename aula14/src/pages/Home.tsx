import { useDispatch, useSelector } from "react-redux"

export const Home = () => {
    const username = useSelector((state: any) => state.user.value.username)
    
    return (
        <div>
            <h1>This is the Home Page</h1>
            <p>{username}</p>
        </div>
    )
}