// Importing css
import { Link, useNavigate} from "react-router-dom";
import { useAuthValue } from "../../components/authentication/Auth";
import style from "./SignIn.module.css";

// Sign in component
function SignIn(){
    // Fetching necessary functions from Auth context
    const {setEmail,setPassword,handleSignIn,isSignedIn}=useAuthValue();
    const navigate=useNavigate();
    // Redirect to home if already signed in
    if (isSignedIn) {
        navigate('/');
    }
    return(
        <>
        <div className={style.authorizationContainer}>
            <h1>Sign In</h1>
            {/* Setting email through email field */}
            <input type="email" required placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)}/>
            {/* Setting password through password field */}
            <input type="password" required placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)}/>
            {/* Sign in button */}
            <button onClick={handleSignIn}>SignIn</button>
            {/* Link to signup page */}
            <Link to={'/signup'}>Or SignUp Instead</Link>
        </div>
        </>
    )
}

// Default export statement
export default SignIn;