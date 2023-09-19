import { useState } from "react"
import { useRegister } from "../hooks/useRegisterContext"

const Register = ()=>{
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {register, error, isLoading} = useRegister()

    const handleSubmit = async(e)=>{
        e.preventDefault()
        
        const user = {name, email, password}

        await register(user)
    }

    return(
        <div className="flex justify-center items-center h-screen align-center">
            <form className="flex flex-col justify-center items-center bg-gray-200 p-24 gap-4 pb-16" onSubmit={handleSubmit}>
                <h3>Sign Up</h3>

                <div className="uname flex justify-between w-full">
                    <label>Username:</label>
                    <input 
                        type="text" 
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </div>
                
                <div className="email flex justify-between w-full">
                    <label>Email:</label>
                    <input 
                        type="email"
                        onChange={(e) => setEmail(e.target.value)} 
                        value={email}
                    />
                </div>

                <div className="password flex justify-between w-full">
                    <label>Password:</label>
                    <input 
                        type="password"
                        onChange={(e) => setPassword(e.target.value)} 
                        value={password}
                    />
                </div>
                <button type="submit" className="rounded-full" disabled={isLoading}>REGISTER</button>
                {error && <div className="error">{error}</div>}
            </form>
        </div>
        
        
    )
}

export default Register