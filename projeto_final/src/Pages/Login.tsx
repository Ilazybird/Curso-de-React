import { auth, provider } from "../Config/Firebase";
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const navigate = useNavigate();

    const SignInWithGoogle = async () => {
       const result = await signInWithPopup(auth, provider)
       navigate("/");
    }

    return (
        <div>
            <p> Sign In With Google to Continue </p>
            <button onClick={SignInWithGoogle}> Sign In With Google </button>
        </div>
    );
}