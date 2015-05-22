
/*
    Test
 */
var pm = require("../pm.js");
console.log(pm.match(12, pm.var("x")));
console.log(pm.match("Hello", pm.var("x")) ); //=> {"x": "Hello"}
console.log(pm.match("A", "B")); // => false  // as not match
console.log(pm.match("A", "A")); // => {}  //  match
console.log(pm.match(["age", 12], ["age", pm.var("my-age")])); // => {"my-age": 12}
console.log(pm.match(["age", 13], ["age2", pm.var("my-age")])); // => false // as not match
console.log(pm.match(["age", 14], [pm._, pm.var("my-age")]));   // => {"my-age": 14}
console.log(pm.match(["age", 14, "yoo"], [pm._, pm.var("my-age")]));   // => {"my-age": 14}
console.log(pm.match([1, ["x", 2]], [1, ["x", pm.var("x")]]));  // => {x: 2}
