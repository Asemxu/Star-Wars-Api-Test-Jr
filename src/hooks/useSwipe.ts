'use client'
import { useDispatch } from "react-redux"
import { useSwipeable } from "react-swipeable"
import { fetchAllCharacters } from "@/app/redux/features/character/characterSlice"
import useCharacters from "./useCharacters"

const useSwipeDown = () => {
  const { currentPage , allPages } = useCharacters()
  const dispatch = useDispatch()
  const handlers = useSwipeable({ 
    onSwipedUp: () => {
      if(allPages >= currentPage)
        dispatch(fetchAllCharacters(currentPage))
    }
  })
  return {
    handlers
  }
}

export default useSwipeDown