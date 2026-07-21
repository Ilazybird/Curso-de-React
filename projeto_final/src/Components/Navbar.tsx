import { Link, Navigate, useNavigate } from "react-router-dom";
import { auth } from '../Config/Firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { signOut } from 'firebase/auth'

export const Navbar = () => {
    const [user] = useAuthState(auth);

    const userNavigate = useNavigate();

    const signUserOut = async () => {
        await signOut(auth)
        
        userNavigate("/login");
    }
    return (
        <div className="Navbar">
            <Link to='/'> Home </Link>
            {!user ? <Link to='/login'> Login </Link> : <Link to='/create_post'> Create Post </Link>}

            <div>
                {user && (
                    <>
                        <img src={user?.photoURL || ""} alt="foto de perfil do google" />
                        <button onClick={signUserOut}> Log Out </button>
                    </>
                )
                }
            </div>
        </div>
    );
}