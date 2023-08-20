'use client'
import isEmpty from "@/app/utils/isEmpty"
import React from 'react'
import Image from "next/image"
import useCharacters from "@/hooks/useCharacters"
import useHeader from '../../../hooks/useHeader'
import { Breakpoints } from "@/app/helpers/constants"
const Header = () => {
  const { titleHeader , character} = useCharacters()
  const { windowSize , comeBackHome } = useHeader()
  return (
    <header className="header">
        {windowSize <= Breakpoints.NOTMOBILE  && !isEmpty(character) 
        ?  <Image
            onClick={comeBackHome}
            src="/arrow-header.webp"
            alt="arrow"
            width={16}
            height={16}
            priority
            />  : <React.Fragment></React.Fragment>}
        <h2 className="title-header">{isEmpty(character) || windowSize > Breakpoints.NOTMOBILE ? titleHeader : character.name}</h2>
    </header>
  )
}

export default Header