import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../../../firebase.config";
import UseAxiosBaseURL from "../../../Hooks/UseAxiosBaseUrl";
export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const baseURL = UseAxiosBaseURL()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()



    //create a new user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //login user
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    //logout user 
    const logoutUser = () => {
        setLoading(true)
        return signOut(auth)
    }
    //google login
    const loginGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    //github login
    const loginGithub = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    //manage user
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            console.log('current user:', currentUser);
            setLoading(false)
        })
        return () => {
            return unSubscribe()
        }
    }, [])


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);

            if (currentUser) {
                const userInfo = { email: currentUser.email };
                baseURL.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token);
                            setLoading(false);
                        }
                    })
            }
            else {
                localStorage.removeItem('access-token');
                setLoading(false);
            }
            
        });
        return () => {
            return unsubscribe();
        }
    }, [baseURL])


    const AuthInfo = {
        user,
        loading,
        createUser,
        loginUser,
        logoutUser,
        loginGoogle,
        loginGithub

    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;