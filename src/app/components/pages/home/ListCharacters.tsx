import React from 'react'
import Character from '@/app/interfaces/character'
const ListCharacters:React.FC<{characters:Array<Character>}> = ({characters}) => {
    return(
        <ul className="list-characters">
            {characters.map((character:Character) =>{
                return(
                    <li key={character.name.length}>
                        <h2 className='text-dark'>{character.name}</h2>
                        <p className="text-light">{character.specieName}</p>
                    </li>
                )
            })}
        </ul>
    )
}

export default ListCharacters