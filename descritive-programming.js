// Functional programming is a part of a larger programming paradigm: declarative programming 


// White space cleanner

//imperative
let string = "This is it";
let urlFriendly = "";

for(let i = 0; i < string.length; i++){
    if(string[i] === " "){
        urlFriendly += "-";
    }else{
        urlFriendly += string[i]
    }
}

console.log(urlFriendly);

//Alot of code lols

//Declarative version - much less code, much more descritive

let string2 = "hELLO WorLD aGAIN iN dESCRITIVE WAY";
let urlFriendly2 = string2.replace(/ /g, "-");
console.log(urlFriendly2);