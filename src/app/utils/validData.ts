const validData = (dataObject:Object) =>{
  if(dataObject.hasOwnProperty('detail'))
    return false
  return dataObject
}

export default validData