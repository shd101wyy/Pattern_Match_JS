/*
 Simple Pattern Match Library by Yiyi Wang (shd101wyy)
 eg:

 pm.match(12, pm.var("x")) => {"x": 12}
 pm.match("Hello", pm.var("x")) => {"x": "Hello"}
 pm.match("A", "B") => false  // as not match
 pm.match(["age", 12], ["age", pm.var("my-age")]) => {"my-age": 12}
 pm.match(["age", 13], ["age2", pm.var("my-age")]) => false // as not match
 pm.match(["age", 14], [pm._, pm.var("my-age")]) => {"my-age": 14}
 */
var pm = (function(){
    var pm = {};

    // Variable
    function Var(var_name){
        this.var_name = var_name;
    }

    // underscore
    pm._ = new Var("_");

    // create Var object.
    pm.var = function(var_name){
        return new Var(var_name);
    };

    function isVar(x){
        return x.constructor === Var;
    }

    // match function
    pm.match = function(a, b){
        function match(a, b, output){
            if (b === pm._) return output;
            if (typeof(a) === "number" || typeof(a) === "string" || a === null){
                if (isVar(b)){
                    output[b.var_name] = a;
                    return output;
                }
                else if (a === b){
                    return output;
                }
                else{
                    return false;
                }
            }
            // array match
            else if (a.constructor === Array){
                if (b.constructor === Array && b.length === a.length){
                    for(var i = 0; i < a.length; i++){
                        if (match(a[i], b[i], output) === false)
                            return false;
                    }
                    return output;
                }
                else{
                    return false;
                }
            }
        }
        return match(a, b, {});
    };


    return pm;
})();
if (typeof(module) !== "undefined"){
    module.exports = pm;
}
