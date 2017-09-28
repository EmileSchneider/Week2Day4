var test = require("tape");
var calc = require("./curryingCalculator.js");

var calc = calc.curryingCalculator;

test("teste den funktionalen Rechner", function(t){
  t.test("teste 1,2,3,4", function(t){
    t.equal(calc(1,2,3,4,5),15, "should be 15");
    t.equal(calc(1,2,3)(4,5), 15, "should be 15");
    t.end();
  });
});
