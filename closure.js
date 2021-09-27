for (let i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log('let', i);
    }, 3000);  
}
for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log( 'var',i);
    }, 3000);  
}