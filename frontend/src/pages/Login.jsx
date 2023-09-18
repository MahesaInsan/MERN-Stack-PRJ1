import { useState } from "react"

const Login = ()=>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async(e)=>{
        e.preventDefault()
    
        console.log(email, password)
    }

    return(
        <div className="flex justify-center items-center h-screen align-center">
            <form className="flex flex-col items-center p-24 pt-10 pb-16 gap-4 bg-gray-200" onSubmit={handleSubmit}>
                <h3 className="mb-10">LOG IN</h3>

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

                <button type="submit rounded-full">LOGIN</button>
            </form>
        </div>
          
    )
}

export default Login