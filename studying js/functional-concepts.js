//Concept 1# - Immutability
//Em vez de mudar o original, faça cópias com alterações, eis a imutabilidade
//Na programação funcional data é imutável

var programador = {
    linnguagem: "php",
    idade: 26
}

function mudarLinguagem(p, l){
    return Object.assign({}, p, {linguagem : l} );
}

// console.log(programador.linnguagem);
// console.log(mudarLinguagem(programador, "js").linguagem);


//Versão ES6
const changeLang = (p, linguagem) => ({
    ...p, 
    linguagem
})

// console.log(changeLang(programador,"python").linguagem);

//Array concat
let lista = [
    {cor: "preto"},
    {cor: "verde"},
    {cor : "vermelho"}
];

const addColor = (ar, cor) => ar.concat({cor});

//ES6 , retorna array com novo objeto contendo a nova cor
const addColorES6 = (ar, cor) => ([...ar, {cor}])

let novaLista = addColorES6(lista, "verde limão");

// console.log(lista);
// console.log(novaLista);


//Concept 2# - Pure Functions , return a value, evaluted using parameters

const monster = {
    name: "Dracula",
    canFly: false,
    strong: true
}

//Função pura, retorna um novo objeto , usando o parâmetro passado no novo
const fly = (monster, fly) =>({
    ...monster,
    canFly: fly
})

// console.log(monster)
// console.log(fly(monster, true))

// 3 rules when writing functions
// 1 - the function should take at least one argument
// 2 - the function should return a value or another function
// 3 - the function should not change or mutate any of this arguments


// Data transformations
//producing transformed copies using functions

//Generates a string from array delimited by something
const skills = ["php", "js", "html", "jquery" ,"css"];

// console.log(skills.join("; "));

//Filter skills starting with j into new array
const jSkills = skills.filter(s => s[0] === "j")

// console.log(jSkills);

const proSkills = skills.map(s => `Pro ${s}`)

// console.log(proSkills);

//FINAL WEAPON - reducing an array into primitive and other objects
//Array reduce, começa da esquerda, reduceRight da direita lols
const numeros = [100,2,10,11,99,105];

const maximo = numeros.reduce((max, numero) => ( numero > max) ? numero : max, 0)

// console.log('numero maior',maximo);

//Using reduce to produce an array with distinct values

const arrAnimais = ['gado', 'gado', 'gado', 'boi', 'vaca'];

const animaisUnicos = arrAnimais.reduce((distinct, animal) => 
    //if disting that is the initial array [], have the animal, return disting
    (distinct.indexOf(animal) !== -1) ?
        distinct:
    //else if the distinct dont have the current animal return a new array with distinct values plus the new one
    [...distinct, animal],
    []
);

// console.log(animaisUnicos);

// Master map and reduce, the skill of transforming date sets is a must have 
