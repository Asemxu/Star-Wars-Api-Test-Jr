const getCharacterID = (characterURL:string) => {
    return characterURL.split("/").slice(5)[0]
}

export default getCharacterID