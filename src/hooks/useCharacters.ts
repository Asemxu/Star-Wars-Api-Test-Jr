'use client'
import Character from '@/app/interfaces/character';
import Keys from '@/app/interfaces/Keys';
import { type RootState } from '@/app/redux/store';
import { useSelector } from 'react-redux';
import getCharacterID from '@/app/utils/getCharacterID';
import { useRouter } from 'next/navigation';
import { Routes } from '@/app/helpers/constants';
import { setCharacter , setKeysCharacter } from '@/app/redux/features/character/characterSlice';
import { useDispatch } from 'react-redux';
const useCharacters = () => {
  const dispatch = useDispatch()
  // const router = useRouter()
  const { titleHeader , isLoading , isError , characters  , keysCharacter , character , currentPage , allPages } = useSelector((state: RootState) => state.character);

  const clickCharacterList = (character:Character) => {
    // const characterID = getCharacterID(character.url)
    // router.push(Routes.CHARACTERPATHNAME+characterID)
    dispatch(setCharacter(character))
    dispatch(setKeysCharacter(character))
    // 
  }


  return {
    currentPage,
    characters,
    allPages,
    isLoading,
    keysCharacter,
    clickCharacterList,
    isError,
    character,
    titleHeader
  }
}

export default useCharacters