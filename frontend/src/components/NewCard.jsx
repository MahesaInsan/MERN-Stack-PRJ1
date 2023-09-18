import {useState} from "react"
import { useCardContext } from "../hooks/useCardContext"

const NewCard = () =>{
    const [name, setName] = useState('')
    const [amount, setAmount] = useState(0)
    const [error, setError] = useState(null)
    const { dispatch } = useCardContext()

    const handleSubmit = async(e)=>{  
        e.preventDefault()

        const card = {name, amount}

        const response = await fetch('/card/new', {
            method: "POST",
            body: JSON.stringify(card),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if(!response.ok){
            setError(json.error)
        }
        if(response.ok){
            setError(null)
            dispatch({type: 'CREATE_CARD', payload: json})
        }
    }

    return(
        <form action="create" onSubmit={handleSubmit}>
            <h3>Add a New Card</h3>
            <label>Card Name:</label>
            <input 
                type="text" 
                onChange={(e)=>setName(e.target.value)} 
                value={name}
                className="border"
            />
            <label>Amount:</label>
            <input 
                type="number"
                onChange={(e)=>setAmount(e.target.value)}
                value={amount}
                className="border"
            />
            <button className="rounded">Add Card</button>
        </form>
    )
}

export default NewCard