### Simple Pattern Match Library by Yiyi Wang(shd101wyy)
#### How to use?
- Node.js
```javascript
var pm = require("pm.js");
```
- Browser
```javascript
<script src="pm.js"></script>
```

#### Examples
```javascript
pm.match(12, pm.var("x"))      // => {"x": 12}
pm.match("Hello", pm.var("x")) // => {"x": "Hello"}
pm.match("A", "B")             // => false, as not match
pm.match(["age", 12], ["age", pm.var("my-age")])  // => {"my-age": 12}
pm.match(["age", 13], ["age2", pm.var("my-age")]) // => false, as not match
pm.match(["age", 14], [pm._, pm.var("my-age")])   // => {"my-age": 14}
pm.match([1, ["x", 2]], [1, ["x", pm.var("x")]])  // => {x: 2}
```
