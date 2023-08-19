'use client'
import useCharacters from "@/hooks/useCharacters"

const Header = () => {
    const { titleHeader} = useCharacters()
    return (
        <header className="header">
            <h2 className="title-header">{titleHeader}</h2>
        </header>
    )
}

export default Header