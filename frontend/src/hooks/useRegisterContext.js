import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useRegister = ()=>{
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)

    const register = async(user) =>{
        setIsLoading(true)
        setError(null)
        const {dispatch} = useAuthContext  

        const response = await fetch('/user/register',{
            method: "POST",
            body: JSON. stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        }
        if(response.ok){
            localStorage.setItem('user', JSON.stringify(json))

            dispatch({type: 'LOGIN', payload: json})
            setIsLoading(false)
        }
    }

    return {register, isLoading, error}
}