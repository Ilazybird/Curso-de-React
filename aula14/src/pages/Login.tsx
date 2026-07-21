import React, { useState } from "react"
import { login, logout } from "../store";
import { useDispatch, useSelector } from 'react-redux'

export const Login = () => {
    const [newUserName, setNewUserName] = useState<string>("");
    const dispatch = useDispatch();
    const username = useSelector((state: any) => state.user.value.username)

    return (
        <div>
            {username}
            <p>
                <input type="text" onChange={(event: React.ChangeEvent<HTMLInputElement>) => { setNewUserName(event.target.value) }} />
                <input type="submit" value="Submit login" onClick={() => dispatch(login({ username: newUserName }))} />
                <input type="submit" value="Logout" onClick={() => dispatch(logout())}/>
            </p>
        </div>
    )
}