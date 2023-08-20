import React from 'react'
import Character from '@/app/interfaces/character'
import CharacterList from './CharacterList'
const ListCharacters:React.FC<{characters:Array<Character> , handleClickCharacter:Function}> = ({characters , handleClickCharacter}) => {
  return(
    <ul className="list-characters">
      {characters.map((character:Character,index) =>{
        return(
          <CharacterList key={index} character={character} handleClickCharacter={handleClickCharacter} />
        )
      })}
    </ul>
  )
}

export default ListCharacters