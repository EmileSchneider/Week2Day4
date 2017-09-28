var myFilter = function(array, func){
  var returnArray;
  for(var i = 0, l = array.length; i < l; i++){
    if(func(array[i])){
      returnArray.push(array[i])
    }
  }
  return returnArray
}
