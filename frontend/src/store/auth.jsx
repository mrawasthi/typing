import {createContext, useContext,useState,useEffect} from "react"

export const AuthContext=createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider= ({children})=>{
    const [token,setToken]=useState(localStorage.getItem("token"))
    const [islogged,setIslogged]=useState(false)
    const storeTokenInLS=(serverToken)=>{
        return localStorage.setItem("token",serverToken)
    }

     const LogoutUser=()=>{
        setToken("")
        
        return localStorage.removeItem("token")
     }

     const userAuthentication=async()=>{
        try{
           const response=await fetch("http://localhost:3000/check",{
            method:"GET",
            headers:{
                Authorization:`Bearer ${token}`
            }
           })
           if(response.ok) {
            const data=await response.json()
            setIslogged(true)
           }               
        }catch(error){
            console.log("${error}")
        }
     }
    
   return(

   <AuthContext.Provider value={{storeTokenInLS,LogoutUser,islogged}}>
       {children}
   </AuthContext.Provider>
   ) 
}

export const useAuth=()=>{
    const authContextValue=useContext(AuthContext)
    if(!authContextValue){
        throw new Error("useAuth used outside of the provider")
    }
    return authContextValue
}