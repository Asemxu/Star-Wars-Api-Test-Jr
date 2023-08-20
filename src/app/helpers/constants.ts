
const MessageTypes  = {
    LOADER :"LOADER",
    ERROR : "ERROR"
}

const ValidFetch = {
    WITHERROR : true,
    FAILEDTOLOADDATA : 'Failed to Load Data',
    FAILEDDATAKEY : 'detail'
} 

const ColorClass = {
    ERROR : 'text-high-emphasis message text-error'
}

const CharacterMessage = {
    NOTSPECIES : 0,
    HUMAN : 'Human',
    NOTVEHICLES : 0
}

const Characters = {
    EMPTY : 0,
    EMPTYCHARACTERS : []
}

const Titles = {
    HEADER : 'Ravn Star Wars Registry',

}

const Routes = {
    CHARACTERPATHNAME : '/character/'
}

const Breakpoints = {
    NOTMOBILE : 767
}

export  { MessageTypes , ValidFetch , ColorClass , CharacterMessage , Characters , Titles , Routes , Breakpoints } 