const CardDetail = ({card})=>{
    const handleClick = async ()=>{
        const response = await fetch('/card/' + card._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if(response.ok){
            return json
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
            <div className="flex justify-end">
                <a onClick={handleClick}>Delete</a>
            </div>
        </div>
    )
}

export default CardDetail