import { ValidFetch } from "../helpers/constants"
const failedData = (jsonData:Object) => {
    return jsonData.hasOwnProperty(ValidFetch.FAILEDDATAKEY)
}

export default failedData