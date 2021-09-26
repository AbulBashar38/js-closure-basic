function bakeAccount(initialBallance) {
    var ballance = initialBallance;
    return function(){
        return ballance;
    }
}

var account = bakeAccount(100000);
console.dir(account);