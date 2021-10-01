# In simple way explain Javascript Closure
```javascript
var num1 = 1;
var num2 = 2;

var sum = function(){
    return num1 + num2;
}
console.log(sum())
```
আমরা যদি উপরের কোড গুলো দেখি তাহলে দেখতে পাবো যে `num1` এবং `num2` function এর বাইরে আছে কিন্তু তার পর ও function এর ভিতর থেকে আমরা `num1 + num2` কে ব্যাবহার করতে পারছি। আর্থাৎ আমরা parent এর জিনিস গুলাকে child থেকে excess করতে পারি। 
*কিন্তু আসলে কিভাবে এইটা ঘটে?*
এইটা ঘটে `closure` এর মাধ্যমে।
closer parent এর যেসব জিনিস গুলা child excess চায় সেই জিনিস গুলার একটা রেফারেন্স নিজের ভিতরে রাখে এবং child এর মধ্যে সেই reference সহ একটা অব্জেক্ট তৈরি হয় এবং এই অব্জেক্টের নাম হয় `closure`. নিচের কোড গুলো লক্ষ করি।
```javascript
var sum = function(){
    var num1 = 1;
    var num2 = 2;
    return function(){
        return num1 + num2;
    }
}
var myFunc = sum();
console.dir(myFunc)
```
এই কোড গুলোর output নিচের ছবিতে দেওয়া হলো

![simpleOutput](./image/simple-output.png)

এখানে `sum` function আর একটা anonymous function return করছে। এই anonymous function return করে `num1 + num2`. কিন্তু anonymous function এর ভিতরে num1 আর num2 নেই। num1 আর num2 আছে তার parent function `sum` এর ভিতরে। এখন এই anonymous function টা তার parent থেকে num1 and num2 এর রেফারেন্স এনে একটা function তৈরি করে নিজের কাছে রেখে দেয় একেই closure বলে। আর সেই জন্যই আমরা parent এর জিনিস child এ access করতে পারি।
# Advance Example
```javascript
function bakeAccount(initialBallance) {
    var ballance = initialBallance;
    return function(){
        return ballance;
    }
}

var account = bakeAccount(100000);
console.dir(account);
```
এখানে আমরা ballance কে protected way তে closure দিয়ে access করতে পারছি কিন্তু সরাসরি নাহ। অর্থাৎ আমরা closure দিয়ে protected way তে কোনো কিছু access করতে পারি।
### `Closure is a function that refer to independent (free) variable.(variable that are used locally but define in enclosing scope).`
![forLoopClosure](./image/forLoopClosure.png)
এইখানে দেখতে পারছি দুই ক্ষেত্রেই same code লেখা হয়েছে। কিন্তু `let i = 0` এর পরিবর্তে `var i = 0` দেওয়া হয়েছে। আর তাই output আসতে ভিন্ন রকম। let এর ক্ষেত্রে output আসছে `0 1 2` আর var এর ক্ষেত্রে আসছে `3 3 3`। আসলে এমন কেনো আসলো?
এমন আসার কারন হলো আমরা জানি var = i একটি global variable এইক্ষেত্রে setTimeOut function টা যেহেতু 3 secound দেরিতে run করছে সেহেতু loop টা আগে চলে i এর মান বার বার change হচ্ছে এবং যখন ই change হচ্ছে loop টা দেখছে যে এই i তো সেই আগের i তখন একই i এর জন্য একটি closure ই তৈরি হচ্ছে এবং এর মান contenously update হয়ে 3 হয়ে যাচ্ছে। এবং 3 secound পর 3 টা 3 print করছে।
কিন্ত let হলো block scope। তাই loop চলার সময় প্রতিবারের i এর মানের জন্য একটা করে block scope তৈরি হচ্ছে। তাই setTimeout এর function টা যখন তার parent এর থেকে i কে access করতে যায় তখন প্রতিটা block scope এর জন্য different different closure তৈরি করে i এর মানর different different reference তার ভিতরে রাখে তাই প্রতিবার different result print করে।