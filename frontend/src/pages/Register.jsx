import { useState } from "react"

const Register = ()=>{
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async(e)=>{
        e.preventDefault()
    
        console.log(name, email, password)
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
                <button type="submit b">REGISTER</button>
            </form>
        </div>
        
        
    )
}

export default Register