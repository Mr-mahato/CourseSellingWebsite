import React , {createContext , useEffect, useState} from 'react'
import axios from 'axios';

// creating a context
export const AuthContext = createContext();


// creating a provider

export const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null);
    const [isAuthenticated , setIsAuthenticated] = useState(false);
    const [token , setToken] = useState(JSON.parse(localStorage.getItem('user')));

    const getUserInfoData = async()=>{
        try {
            const resp = await axios.get(`http://localhost:3000/admin/userInfo`,{
                headers:{
                    
                    Authorization:`Bearer ${token}`}
            }) 
            if(resp){
                setUser({
                    ...resp.data
                });
                setIsAuthenticated(true);
            }
        } catch (error) {
            console.log(error.message);
            console.log('you got error in authprovider');
        }
    }
    
    useEffect(()=>{
        if(token){
            getUserInfoData();
        }
    },[token])


    return (
        <AuthContext.Provider value={{user , setUser , isAuthenticated , setIsAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
}
