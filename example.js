 let globalCVar = "I am a global variable";
function exampleFunction() {
    let localCVar = "I am a local variable";
    if (true) {
        let blockCVar = "I am a block scoped variable";
        console.log(blockCVar); 
        console.log(globalCVar);
        console.log(localCVar);
    
    }
}
exampleFunction();
console.log(globalCVar);
console.log(localCVar);
console.log(blockCVar); {
    
}