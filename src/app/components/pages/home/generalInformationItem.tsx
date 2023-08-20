import Keys from '@/app/interfaces/Keys'
import React from 'react'
const generalInformationItem : React.FC<{keyValue:Keys , character:any}> = ({ keyValue,character }) => {
  return (
    <li className="general-information-item">
      <h2 className="text-light">{keyValue.valueFormated}</h2>
      <h2 className="text-dark">{character[keyValue.originValue]}</h2>
    </li>
  )
}

export default generalInformationItem