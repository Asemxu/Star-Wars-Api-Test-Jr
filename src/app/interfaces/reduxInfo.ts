import Keys from "./Keys";
import Character from "./character";

interface ReduxInfo{
    isLoading:Boolean,
    isError:Boolean,
    currentPage:number,
    characters:Array<Character>
    allPages:number,
    titleHeader:string,
    // characterUrl:string,
    character:Character,
    keysCharacter:Array<Keys>
}

export default ReduxInfo