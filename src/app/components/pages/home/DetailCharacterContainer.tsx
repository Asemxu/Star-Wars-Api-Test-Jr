import Character from '@/app/interfaces/character'
import React from 'react'
import isEmpty from '@/app/utils/isEmpty'
import DetailCharacter from './DetailCharacter'
import Keys from '@/app/interfaces/Keys'

const DetailCharacterContainer:React.FC<{character:Character , keys : Array<Keys>}> = ({character , keys}) => {
  return (
    <React.Fragment>
      {isEmpty(character) 
      ? <React.Fragment></React.Fragment> 
      : <DetailCharacter character={character} keys={keys}/>}
    </React.Fragment>
  )
}

export default DetailCharacterContainer