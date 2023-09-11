import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import NewCard from "./NewCard"
import CardDetail from "../components/CardDetail"

const Card = () =>{
    const [cards, setCards] = useState(null)

    useEffect(()=>{
        const fetchCards = async()=>{
            const response = await fetch('/card')
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
            <div className="pl-4">
                {cards && cards.map((card)=>(
                    <CardDetail key={card._id} card={card}/>
                ))}
                <NewCard />
            </div>
        </div>
    )
}

export default Card