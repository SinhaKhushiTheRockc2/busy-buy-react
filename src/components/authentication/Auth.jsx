import React, { createContext, useContext, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from "../../firebaseInit";  // Adjust the path according to your project structure

// Create auth context
const authContext = createContext();

// Custom hook to use auth context
function useAuthValue() {
    const value = useContext(authContext);
    if (!value) {
        throw new Error("useAuthValue must be used within an AuthProvider");
    }
    return value;
}

// Auth provider component
const Auth = ({ children }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [isRegistered,setIsRegistered]=useState(false);

    // Function to handle user registration
    const handleSignUp = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            setIsRegistered(true);
            showToast('🎉 User Registered Successfully!!!', 'success');
            setEmail("");
            setPassword("");
        } catch (error) {
            setError(error.message);
            showToast('😬 User Registration Failed!!!', 'error');
        }
    };

    // Function to handle user login
    const handleSignIn = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            showToast('✌️ User Signed In Successfully!!!', 'success');
            setEmail("");
            setPassword("");
            setIsSignedIn(true);
        } catch (error) {
            setError(error.message);
            showToast('🤕 Incorrect Credentials!!!', 'error');
            console.log("SignIn error:",error);
        }
    };

    // Function to handle user logout
    const handleSignOut = async () => {
        try {
            await signOut(auth);
            showToast('👋 User Signed Out Successfully!!!', 'success');
            setIsSignedIn(false);
        } catch (error) {
            setError(error.message);
            showToast('😞 Sign Out Failed!!!', 'error');
        }
    };

    // Helper function to display toast notifications
    const showToast = (message, type) => {
        toast[type](message, {
            position: "top-right",
            autoClose: true,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            theme: "dark",
        });
    };

    // Provide auth context value to children
    return (
        <>
            <ToastContainer />
            <authContext.Provider value={{ email, setEmail, password, setPassword, error, isSignedIn, handleSignUp, handleSignIn, handleSignOut ,isRegistered}}>
                {children}
            </authContext.Provider>
        </>
    );
};

// Export hook and provider
export { useAuthValue};
export default Auth;
