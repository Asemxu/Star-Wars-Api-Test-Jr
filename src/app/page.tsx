"use client"
import React from 'react'
import  useCharacters from '@/hooks/useCharacters'
import DetailCharacterContainer from '@/app/components/pages/home/detailCharacterContainer'

const  HomePage = () => {
  const {character , keysCharacter } = useCharacters()
  return (
    <React.Fragment>
      <main>
        <DetailCharacterContainer character={character} keys={keysCharacter} />       
      </main>
    </React.Fragment>
   
  )
}


export default HomePage