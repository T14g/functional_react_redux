//Immutability
//Em vez de mudar o original, faça cópias com alterações, eis a imutabilidade
//Na programação funcional data é imutável

var programador = {
    linnguagem: "php",
    idade: 26
}

function mudarLinguagem(p, l){
    return Object.assign({}, p, {linguagem : l} );
}

console.log(programador.linnguagem);
console.log(mudarLinguagem(programador, "js").linguagem);


//Versão ES6
const changeLang = (p, linguagem) => ({
    ...p, 
    linguagem
})

console.log(changeLang(programador,"python").linguagem);

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

console.log(lista);
console.log(novaLista);
