import Message from "./message"
import ListCharacters from "../pages/home/ListCharacters";
import  { MessageTypes , ValidFetch , ColorClass }  from "@/app/helpers/constants";
import React from 'react'
import Character from "@/app/interfaces/character";
const Sidebar:React.FC<{characters:Array<Character>,isLoading:Boolean , isError:Boolean}> = ({characters,isLoading,isError}) => {
    return (
        <aside className="sidebar">
            {isError || isLoading 
            ? <Message type={isLoading ? MessageTypes.LOADER : MessageTypes.ERROR} text={isError ? ValidFetch.FAILEDTOLOADDATA  : '' } className={isError ? ColorClass.ERROR  : '' }/>
            : <ListCharacters characters={characters} />}
        </aside>
    )
}

export default Sidebar