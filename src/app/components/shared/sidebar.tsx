'use client'
import Message from "./message"
import  { MessageTypes , ValidFetch , ColorClass, Breakpoints }  from "@/app/helpers/constants";
import useCharacters from "@/hooks/useCharacters";
import { useEffect } from "react";
import { fetchAllCharacters } from "@/app/redux/features/character/characterSlice";
import { useDispatch } from "react-redux";
import isEmpty from "@/app/utils/isEmpty";
import React from "react";
import useHeader from "@/hooks/useHeader";
import useSwipe from "@/hooks/useSwipe";
import ListCharacters from "@/app/components/pages/home/listCharacters";
import { AppDispatch } from "@/app/redux/store";

const Sidebar:React.FC<{}> = ({}) => {
  const { isError , isLoading , clickCharacterList , characters , character , currentPage  } = useCharacters()
  const dispatch = useDispatch<AppDispatch>()
  const { windowSize } = useHeader()
  const { handlers } = useSwipe()
  useEffect(() => {
    dispatch(fetchAllCharacters(currentPage))
  },[])

  if(isEmpty(character) || windowSize > Breakpoints.NOTMOBILE)
    return(
      <aside {...handlers} className="sidebar">
        <ListCharacters characters={characters}  handleClickCharacter={clickCharacterList}/>
        <Message type={isLoading ? MessageTypes.LOADER : MessageTypes.ERROR} text={isError ? ValidFetch.FAILEDTOLOADDATA  : '' } className={isError ? ColorClass.ERROR  : '' }/>
      </aside>)
  return <React.Fragment></React.Fragment>
}

export default Sidebar