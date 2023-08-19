import { Characters } from '../helpers/constants'
const isEmpty = (data:any) => {
    if(typeof data === 'object'){
        if(Array.isArray(data))
            return data.length !== Characters.EMPTY
        return Object.keys(data).length === Characters.EMPTYCHARACTERS.length
    }
    return data.length !== Characters.EMPTY
}

export default isEmpty