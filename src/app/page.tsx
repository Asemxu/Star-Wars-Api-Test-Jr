"use client"
import React from 'react'
import  useCharacters from '../hooks/useCharacters'
import DetailCharacterContainer from './components/pages/home/DetailCharacterContainer'
import Sidebar from './components/shared/sidebar'
const  Home = () => {
  const { characters , isLoading , isError , clickCharacterList , character , keysCharacter } = useCharacters()
  
  return (
    <React.Fragment>
      <Sidebar characters={characters} isLoading={isLoading} isError={isError} handleClickCharacter={clickCharacterList}/>
      <main>
        <DetailCharacterContainer character={character} keys={keysCharacter} />       
      </main>
    </React.Fragment>
   
  )
}


export default Home