import React from 'react'
import Character from '@/app/interfaces/character'
import Keys from '@/app/interfaces/Keys'
import GeneralInformationItem from './generalInformationItem'
import VehicleItem from './vehicleItem'
const DetailCharacter:React.FC<{character:Character , keys:Array<Keys>}> = ({character , keys}) => {
  return (
    <section className="detail-character-container">
      <h2 className="text-dark">General Information</h2>
      <ul className="list-general-information">
      {keys.map((key, index) =>{
        return(
          <GeneralInformationItem key={index} keyValue={key} character={character}/>
        )
      })}
      </ul>
      <h2 className='vehicles-title text-dark'>Vehicles</h2>
      <ul className='list-vehicles'>
        {character?.vehiclesData.map((vehicle,index) => {
          return (
            <VehicleItem vehicle={vehicle} key={index} />
          )
        })}
      </ul>
    </section>
  )
}

export default DetailCharacter