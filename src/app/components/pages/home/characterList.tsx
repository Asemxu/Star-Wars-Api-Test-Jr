import Image from 'next/image'
import Character from "@/app/interfaces/character"
import React from 'react'
const CharacterList : React.FC<{character:Character, handleClickCharacter:Function}> = ({character,handleClickCharacter}) => {
  return (
    <li className="character-list-item" onClick={() => handleClickCharacter(character)}>
      <div className="character-item-content">
        <h2 className='text-dark'>{character.name}</h2>
        <p className="text-light">{character.specie?.name} from {character.planet?.name}</p>
      </div>
      <Image
        src="/arrow.webp"
        alt="arrow"
        width={7.41}
        height={12}
        priority
      />
    </li>
  )
}

export default CharacterList