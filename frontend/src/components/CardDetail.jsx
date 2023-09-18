import { useCardContext } from "../hooks/useCardContext"

const CardDetail = ({card})=>{
    const {dispatch} = useCardContext()

    const handleClick = async ()=>{
        const response = await fetch('/card/' + card._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if(response.ok){
            dispatch({type:'DELETE_CARD', payload: json});
        }
    }

    return(
        <div className="grid grid-cols-4 border w-1/2 mt-5 p-2">
            <div className="w-1/2">
                <img src="https://cdn-icons-png.flaticon.com/512/60/60378.png" alt="" />
            </div>
            <div className="col-span-2 flex flex-col justify-center">
                <h4 className="">{card.name}</h4>
                <h2>Balance: {card.amount}</h2>

            </div>
            <button className="flex justify-end" onClick={handleClick}>
                Delete
            </button>
        </div>
    )
}

export default CardDetail