'use client'

import Character from "@/app/interfaces/character";
import { createSlice } from "@reduxjs/toolkit";
import ReduxInfo from "@/app/interfaces/reduxInfo";
const initialState:ReduxInfo = {
  isLoading:true,
  isError:false,
  characters:[],
  titleHeader:'Star Wars Registry',
  characterUrl:''
}

export const characterSlice = createSlice({
  name:'Character',
  initialState,
  reducers:{
    getAllCharacters: (state) => {
        console.log("Get Characters")
    },
}
})

export const { getAllCharacters } = characterSlice.actions;

export default characterSlice.reducer   

