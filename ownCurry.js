var curry = function(func){
    var allArguments = [];
    var funcl = func.length;
    var x = function(...args){
      args.forEach(function(item){ allArguments.push(item)  });
      if(allArguments.length >= funcl){
        return func(...allArguments);
      } else {
        return x;
      }
    }
    return x;
  }


var multiplyFour = function(num1, num2, num3, num4){
  return num1 * num2 * num3 * num4;
}

var curriedMultiplier = curry(multiplyFour)
var partialMult = curriedMultiplier(3,5);
partialMult(6,2);
