import React , { useState , useEffect} from 'react'
import Character from '@/app/interfaces/character';
import  { CharacterMessage , Characters }  from "@/app/helpers/constants";
import getKeysCharacters from '@/app/helpers/getKeysCharacter';
import isEmpty from '../app/utils/isEmpty'
import Vehicle from '@/app/interfaces/vehicle';
import Keys from '@/app/interfaces/Keys';

const useCharacters = () => {
  const [characters,setCharacters] = useState(Array<Character>)
  const [isLoading, setIsLoading] = useState(true)
  const [isError , setIsError] = useState(false)
  const [character , setCharacter] = useState({} as Character)
  const [keysCharacter , setKeysCharacter] = useState(Array<Keys>)

  useEffect(() => {
    const fetchCharacters = async  () => {
      const charactersFetch =  await getAllCharacters()
      if(isEmpty(charactersFetch)){
        setCharacters(charactersFetch)
        setIsLoading(false)
        setIsError(false)
      }else{
        setIsLoading(false)
        setIsError(true)
      }
    }
    fetchCharacters()
  },[])


  const getHomeWorld = async (homeWorld:string) =>{
    const rest = await fetch(homeWorld)
    const planet = await rest.json()
    return planet 
  }

  const getSpecie = async (specieName:string) => {
    const res = await fetch(specieName)
    const specie = await res.json()
    return specie
  }

  const getVehicle = async (vehicleName:string) =>{
    const res = await fetch(vehicleName)
    const vehicle = await res.json()
    return vehicle
  }

  const clickCharacterList = (character:Character) => {
    setCharacter(character)
    setKeysCharacter(getKeysCharacters(character))
  }

  const getAllCharacters = async () =>{
    try{
      const rest = await fetch(process.env.API_URL + "people/?page=1")
      const json = await rest.json()
      let characters : Array<Character> = json.results
      for(const character of characters){
        if(character.species.length === CharacterMessage.NOTSPECIES ){
          character.specie =  { 
            name : CharacterMessage.HUMAN
          }
        }else{
          //Obtenemos la primera especie, ya que pueden tener multples especies y eso llamaria multiples peticiones
          const specie = await getSpecie(character.species[0])
          character.specie =specie
        }
        if(character.vehicles.length !== CharacterMessage.NOTVEHICLES){
          let vechicles = new Array<Vehicle>
          for(const vehicle of character.vehicles){
            vechicles.push(await getVehicle(vehicle))
          }
          character.vehiclesData = vechicles
        }else{
          character.vehiclesData = []
        }
        const planet = await getHomeWorld(character.homeworld)
        character.planet = planet
      }
      return characters
    }catch(ex){
      console.log(ex)
      return Characters.EMPTYCHARACTERS
    }
  }

  return {
    getAllCharacters,
    characters,
    isLoading,
    keysCharacter,
    clickCharacterList,
    isError,
    character
  }
}

export default useCharacters