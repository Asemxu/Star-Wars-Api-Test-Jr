'use client'
import { RootState } from "@/app/redux/store";
import { useEffect , useState } from "react"
import { useDispatch } from "react-redux";
import { initialState , setInitialStateCharacter } from "@/app/redux/features/character/characterSlice";
const useHeader = () => {
    const [windowSize,setWindowSize] = useState(0)
    const dispatch = useDispatch()

    useEffect(() => {
        setWindowSize(window.screen.width)
    },[])

    const comeBackHome = () => {
        dispatch(setInitialStateCharacter(initialState))
    }

    return {
        windowSize,
        comeBackHome
    }
}

export default useHeader