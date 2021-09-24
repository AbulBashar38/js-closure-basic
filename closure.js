// const num1 = 1;


// const sum = function() {
//     const num2 = 2;
//     return function () {
//         return num1 + num2;
//     };
// }
// const myFunc = sum()
// console.dir(myFunc)
function bankAccount (initialBallance){
 var ballance = initialBallance;
 return function(){
     return ballance;
 };
}
const account = bankAccount(100000)
console.log(account())