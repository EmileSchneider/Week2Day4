var sumOf5 = function(...nums){
  let countOfArgs = []
  var calc = function(...args){
    args.forEach(function(item){
      countOfArgs.push(item);
    });
    if(countOfArgs.length < 5){
      return calc;
    } else {
      var counted = 0;
      countOfArgs.forEach(function(item){
        counted += item;
      })
      return counted
    }
  }
  return calc(...nums);
}


module.exports.curryingCalculator = sumOf5;
