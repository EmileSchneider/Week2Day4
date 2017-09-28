var myEach = function(array, func){
  var returnArray = [];
  for(var i = 0, l = array.length; i < l; i++){
    returnArray.push(func(array[i]));
  }
  return returnArray;
}

/// still work on, 
