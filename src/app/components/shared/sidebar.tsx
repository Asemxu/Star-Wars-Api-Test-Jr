'use client'
import Message from "./message"
import ListCharacters from "../pages/home/ListCharacters";
import  { MessageTypes , ValidFetch , ColorClass, Breakpoints }  from "@/app/helpers/constants";
import useCharacters from "@/hooks/useCharacters";
import { useEffect } from "react";
import { fetchAllCharacters } from "@/app/redux/features/character/characterSlice";
import { useDispatch } from "react-redux";
import isEmpty from "@/app/utils/isEmpty";
import React from "react";
import useHeader from "@/hooks/useHeader";
const Sidebar:React.FC<{}> = ({}) => {
  const { isError , isLoading , clickCharacterList , characters , character   } = useCharacters()
  const dispatch = useDispatch()
  const { windowSize } = useHeader()
  useEffect(() => {
    dispatch(fetchAllCharacters())
  },[])
  
  if(isEmpty(character) || windowSize > Breakpoints.NOTMOBILE)
    return(
      <aside className="sidebar">
        {isError || isLoading 
        ? <Message type={isLoading ? MessageTypes.LOADER : MessageTypes.ERROR} text={isError ? ValidFetch.FAILEDTOLOADDATA  : '' } className={isError ? ColorClass.ERROR  : '' }/>
        : <ListCharacters characters={characters}  handleClickCharacter={clickCharacterList}/>}
      </aside>)
  return <React.Fragment></React.Fragment>
}

export default Sidebar