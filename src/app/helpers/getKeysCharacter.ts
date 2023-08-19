import Character from "../interfaces/character"
import Keys from "../interfaces/Keys"

const getKeysCharacters = (character:Character) => {
    let keys = new Array<string>
    //En esta variable guardare tanto el key formateado y el key en su valor original
    let keys_info = new Array<Keys>

    for(const prop in character){
        if(prop.includes('color') || prop.includes("year")){
            keys.push(prop)
            keys_info.push({
                originValue:prop
            })
        }
    }

    //Recorro las keys y les quito el guion bajo
    keys.forEach((key,index) => {
        keys[index] = key.replace('_',' ')
    })

    //Recorro las keys para transformar las primeras en mayusuclas y concatenarlas
    keys.forEach((key,positionKeys) => {
        let keys_array = key.split(' ')
        let key_string = ""
        keys_array.forEach((key_array , positionKeysArray) => {
            keys_array[positionKeysArray] = key_array.charAt(0).toUpperCase() + key_array.slice(1)
        })
        key_string = keys_array.join(' ')
        keys[positionKeys] = key_string
        keys_info[positionKeys].valueFormated = key_string
    })
    return keys_info
}

export default getKeysCharacters