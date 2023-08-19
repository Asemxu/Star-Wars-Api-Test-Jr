import Character from "./character";

interface ReduxInfo{
    isLoading:Boolean,
    isError:Boolean,
    characters:Array<Character>
    titleHeader:string,
    characterUrl:string
}

export default ReduxInfo