'use client'
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ReduxInfo from "@/app/interfaces/reduxInfo";
import { getAllCharacters } from "@/app/api/character";
import getKeysCharacters from "@/app/helpers/getKeysCharacter";
import isEmpty from "@/app/utils/isEmpty";

export const initialState:ReduxInfo = {
  isLoading:true,
  isError:false,
  characters: [],
  titleHeader:'Ravn Star Wars Registry',
  keysCharacter:[],
  currentPage:1,
  allPages:0,
  // characterUrl:'',
  character:{
    name: "",
    gender: "",
    species: [],
    homeworld: "",
    mass: "",
    planet: {
      name:""
    },
    specie: {
      name:""
    },
    hair_color: "",
    skin_color: "",
    eye_color: "",
    birth_year: "",
    vehicles: [],
    vehiclesData: [],
    url:""
  }
}

export const fetchAllCharacters = createAsyncThunk('characters/fetchAllCharacters',async (currentPage:number) => {
  const response = await getAllCharacters(currentPage)
  return response
  }
)

export const characterSlice = createSlice({
  name:'Character',
  initialState,
  reducers:{
    setCharacter:(state,action) => {
      state.character = action.payload
    },
    setKeysCharacter:(state,action) => {
      state.keysCharacter = getKeysCharacters(action.payload)
    },
    setInitialStateCharacter:(state,action) => {
      state.character = action.payload.character
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCharacters.pending, (state, action) => {
        state.isLoading = true
      })
      .addCase(fetchAllCharacters.fulfilled, (state, action: PayloadAction<Object>) => {
        state.isLoading = false
        state.characters = state.characters.concat(action.payload.characters)
        state.allPages = action.payload.allPages
        state.currentPage = state.currentPage + 1
        if(!isEmpty(action.payload.characters))
          state.isError = true
        else
          state.isError = false
      })
      .addCase(fetchAllCharacters.rejected, (state, action) => {
        state.isLoading = false
        state.characters = []
        state.isError = true
      })
  }

})

export const { setCharacter , setKeysCharacter , setInitialStateCharacter } = characterSlice.actions

export default characterSlice.reducer   

