var sum = function(){
    var num1 = 1;
    var num2 = 2;
    return function(){
        return num1 + num2;
    }
}
var myFunc = sum();
console.dir(myFunc)