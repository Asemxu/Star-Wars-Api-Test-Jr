'use client'
import Message from "./message"
import ListCharacters from "../pages/home/ListCharacters";
import  { MessageTypes , ValidFetch , ColorClass }  from "@/app/helpers/constants";
import Character from "@/app/interfaces/character";
import useCharacters from "@/hooks/useCharacters";
import { useEffect } from "react";
const Sidebar:React.FC<{}> = ({}) => {
    const { isError , isLoading , clickCharacterList , characters , getAllCharacters  } = useCharacters()

    getAllCharacters()
        
    return (
        <aside className="sidebar">
            {isError || isLoading 
            ? <Message type={isLoading ? MessageTypes.LOADER : MessageTypes.ERROR} text={isError ? ValidFetch.FAILEDTOLOADDATA  : '' } className={isError ? ColorClass.ERROR  : '' }/>
            : <div>Lista personajes</div>}
            <ListCharacters characters={characters}  handleClickCharacter={clickCharacterList}/>
        </aside>
    )
}

export default Sidebar