'use client'
import Character from "@/app/interfaces/character";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ReduxInfo from "@/app/interfaces/reduxInfo";
import { getAllCharacters } from "@/app/api/character";
const initialState:ReduxInfo = {
  isLoading:true,
  isError:false,
  characters: [],
  titleHeader:'Star Wars Registry',
  characterUrl:''
}

export const fetchAllCharacters = createAsyncThunk('characters/fetchAllCharacters',async () => {
  const response = await getAllCharacters()
  console.log(response);
  return response
  }
)

export const characterSlice = createSlice({
  name:'Character',
  initialState,
  reducers:{},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCharacters.pending, (state, action) => {
        state.isLoading = true
      })
      .addCase(fetchAllCharacters.fulfilled, (state, action: PayloadAction<Character[]>) => {
        state.isLoading = false
        state.characters = action.payload
      })
      .addCase(fetchAllCharacters.rejected, (state, action) => {
        state.isLoading = false
        state.characters = []
        state.isError = true
      })
  }
      // try{
        //     const rest = await fetch(process.env.API_URL + "people/?page=1")
        //     const json = await rest.json()
        //     let characters : Array<Character> = json.results
        //     for(const character of characters){
        //       if(character.species.length === CharacterMessage.NOTSPECIES ){
        //         character.specie =  { 
        //           name : CharacterMessage.HUMAN
        //         }
        //       }else{
        //         //Obtenemos la primera especie, ya que pueden tener multples especies y eso llamaria multiples peticiones
        //         const specie = await getSpecie(character.species[0])
        //         character.specie =specie
        //       }
        //       if(character.vehicles.length !== CharacterMessage.NOTVEHICLES){
        //         let vechicles = new Array<Vehicle>
        //         for(const vehicle of character.vehicles){
        //           vechicles.push(await getVehicle(vehicle))
        //         }
        //         character.vehiclesData = vechicles
        //       }else{
        //         character.vehiclesData = []
        //       }
        //       const planet = await getHomeWorld(character.homeworld)
        //       character.planet = planet
        //     }
        //     return characters
        //   }catch(ex){
        //     console.log(ex)
        //     return Characters.EMPTYCHARACTERS
        //   }
})


export default characterSlice.reducer   

