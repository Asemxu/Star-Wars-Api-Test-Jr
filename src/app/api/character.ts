import { CharacterMessage, Characters } from "../helpers/constants"
import Character from "../interfaces/character"
import Vehicle from "../interfaces/vehicle"
import failedData from "../utils/failedData"

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

export const getAllCharacters =  async (page:number) =>{
  try{
    const rest = await fetch(process.env.API_URL + "people/?page="+page)
    const json = await rest.json()
    if(!failedData(json)){
      let characters : Array<Character> = json.results
      for(const character of characters){
        if(character.species.length === CharacterMessage.NOTSPECIES ){
          character.specie =  { 
              name : CharacterMessage.HUMAN
        }
        }else{
          //Obtenemos la primera especie, ya que pueden tener multples especies y eso llamaria multiples peticiones
          // const specie = await getSpecie(character.species[0])
          // character.specie =specie
        }
        // if(character.vehicles.length !== CharacterMessage.NOTVEHICLES){
          // let vechicles = new Array<Vehicle>
          // for(const vehicle of character.vehicles){
          //     vechicles.push(await getVehicle(vehicle))
          // }
          // character.vehiclesData = vechicles
        // }else{
          // character.vehiclesData = []
        // }
          // const planet = await getHomeWorld(character.homeworld)
          // character.planet = planet
      }
      return { characters , allPages : Math.ceil(json.count/10) } 
    }
    return  { characters : Characters.EMPTYCHARACTERS , allPages : 0 }
  }catch(ex){
    console.log(ex)
    return  { characters : Characters.EMPTYCHARACTERS , allPages : 0 }
  }
}
