import { createContext, useEffect, useState } from "react";
import netlifyIdentity from 'netlify-identity-widget'
const AuthContext = createContext({
    user :null ,
    login : ()=>{},
    logout :() =>{},
    authReady :false
})

export const AuthContextProvider=({children})=>{
    const [user,setUser] = useState()
    const [authReady, setAuthReady] = useState(false)
    
    useEffect(()=>{
        netlifyIdentity.on('login',(user)=>{
            setUser(user)
            netlifyIdentity.close
        })
        netlifyIdentity.on('logout',()=>{
            setUser(null)
        })
        netlifyIdentity.on('init',(user)=>{
            setAuthReady(true)
            setUser(user)
        })
        netlifyIdentity.init()
        return()=>{
            netlifyIdentity.off('login')
            netlifyIdentity.off('logout')
        }
    },[])
    
    const login=()=>{
        netlifyIdentity.open()
    }

    const context ={user,login}

    return(
        <AuthContext.Provider value={context}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContext;