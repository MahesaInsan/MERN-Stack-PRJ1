import { useEffect } from "react"
import Navbar from "../components/Navbar"
import CardDetail from "../components/CardDetail"
import { useCardContext } from "../hooks/useCardContext"
import NewCard from "../components/NewCard"

const Card = () =>{
    const {cards, dispatch} = useCardContext()

    useEffect(()=>{
        const fetchCards = async()=>{
            const response = await fetch('/card')
            const json = await response.json()

            if(response.ok){
                dispatch({type:'SET_CARDS', payload: json})
            }
        }
        
        fetchCards()
    }, [])

    return(
        <div className="flex flex-row h-screen w-full">
            <Navbar />
            <div className="p-4">
                {cards && cards.map((card)=>(
                    <CardDetail key={card._id} card={card}/>
                ))}
                <NewCard />
            </div>
        </div>
    )
}

export default Card