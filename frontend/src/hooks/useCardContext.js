import { CardContext } from "../contexts/CardContext";
import { useContext } from "react";

export const useCardContext = ()=>{
    const context = useContext(CardContext)

    if(!context){
        throw Error('useCardContext can only be used in card context')
    }

    return context
}