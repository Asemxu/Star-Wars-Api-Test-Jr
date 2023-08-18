const useCharacters = () => {

  const getAllCharacters = async () =>{
    const rest = await fetch(process.env.API_URL + "people/?page=1")
    const characters = await rest.json()
    return characters
  }

  return {
    getAllCharacters
  }
}

export default useCharacters