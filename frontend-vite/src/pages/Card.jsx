import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"

const Card = () =>{
    const [cards, setCards] = useState(null)

    useEffect(()=>{
        const fetchCards = async()=>{
            const response = await fetch('/api/card')
            console.log(response)
            const json = await response.json()

            if(response.ok){
                setCards(json)
            }
        }
        
        fetchCards()
    }, [])

    return(
        <div className="flex flex-row h-screen w-full">
            <Navbar />
            <div>
                {cards && cards.map((card)=>{
                    <p key={card._id}>{card.name}</p>
                })}
            </div>
        </div>
    )
}

export default Card