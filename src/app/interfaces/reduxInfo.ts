import Keys from "./Keys";
import Character from "./character";

interface ReduxInfo{
    isLoading:Boolean,
    isError:Boolean,
    characters:Array<Character>
    titleHeader:string,
    // characterUrl:string,
    character:Character,
    keysCharacter:Array<Keys>
}

export default ReduxInfo