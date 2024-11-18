// Importing css 
import { useNavigate } from "react-router";
import { useAuthValue } from "../../components/authentication/Auth";
import style from "./SignIn.module.css";

function SignUp(){
    // Fetching necessary functions from Auth context
    const {setEmail,setPassword,handleSignUp}=useAuthValue();
    const {isRegistered}=useAuthValue();
    const navigate=useNavigate();

    if(isRegistered){
        navigate('/signin')
    }
    return(
        <>
        <div className={style.authorizationContainer}>
            <h1>Sign Up</h1>
            {/* Input field for name */}
            <input type="text" placeholder="Enter your name" required />
            {/* Input field for email */}
            <input type="email" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)} required/>
            {/* Input field for password */}
            <input type="password" placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)} required/>
            {/* Signup button */}
            <button onClick={handleSignUp}>SignUp</button>
        </div>
        </>
    )
}

export default SignUp;