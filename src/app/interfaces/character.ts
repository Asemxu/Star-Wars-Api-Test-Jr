import Planet from "./planet"
import Specie from "./Specie"
import Vehicle from "./vehicle"

interface Character{
    name : string,
    gender:string,
    species: Array<string>,
    homeworld: string,
    mass:string,
    planet:Planet,
    specie: Specie
    hair_color: string,
	skin_color: string,
	eye_color: string,
	birth_year: string,
    vehicles: Array<string>
    vehiclesData: Array<Vehicle>
}

export default Character
