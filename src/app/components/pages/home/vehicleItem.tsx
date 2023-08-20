import React from 'react'
import Vehicle from '@/app/interfaces/vehicle'

const vehicleItem : React.FC<{vehicle:Vehicle}>= ({vehicle}) => {
  return (
    <li className="vehicles-item">
      <h2 className="text-light">{vehicle.name}</h2>
    </li>
  )
}

export default vehicleItem