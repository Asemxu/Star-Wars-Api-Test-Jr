"use client"
import Image from 'next/image'
import React , { useState , useEffect} from 'react'
import validData from './utils/validData'
import  useCharacters from './hooks/useCharacters'
import Sidebar from './components/shared/sidebar'
import Character from './interfaces/character'
import  { CharacterMessage }  from "@/app/helpers/constants";
const  Home = () => {
  const { getAllCharacters } = useCharacters()
  const [characters,setCharacters] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError , setIsError] = useState(false)

  useEffect(() => {
    const fetchSpecies = async () => {

    }
    const fetchCharacters = async () => {
      const data = await getAllCharacters()
      if(validData(data)){
        const charactersData = data.results
        charactersData.forEach( (characterData:Character) =>{
          if(characterData.species.length === CharacterMessage.NOTSPECIES )
            characterData.specieName = CharacterMessage.HUMAN
          else
            characterData.specieName = "Si tiene"
        })
        setCharacters(charactersData)
        setIsLoading(false)
        setIsError(false)
      }else{
        setIsLoading(false)
        setIsError(true)
      }
    }
    fetchCharacters()
  },[])

 

  return (
    <React.Fragment>
      <Sidebar characters={characters} isLoading={isLoading} isError={isError}/>
      <main>
        Page
      </main>
    </React.Fragment>
   
  )
}


export default Home