import React from 'react'
import Character from '@/app/interfaces/character'
import Keys from '@/app/interfaces/Keys'

const DetailCharacter:React.FC<{character:Character , keys:Array<Keys>}> = ({character , keys}) => {
  return (
    <section className="detail-character-container">
      <h2 className="text-dark">General Information</h2>
      <ul className="list-general-information">
      {keys.map((key, index) =>{
        return(
          <li key={index} className="general-information-item">
              <h2 className="text-light">{key.valueFormated}</h2>
              <h2 className="text-dark">{character[key.originValue]}</h2>
          </li>
        )
      })}
      </ul>
      <h2 className='vehicles-title text-dark'>Vehicles</h2>
      <ul className='list-vehicles'>
        {character?.vehiclesData.map((vehicle,index) => {
          return (
            <li key={index} className="vehicles-item">
                <h2 className="text-light">{vehicle.name}</h2>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default DetailCharacter