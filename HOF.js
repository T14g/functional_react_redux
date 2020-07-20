// Passando funções como argumentos // HIGH ORDER FUNCTIONS
//High Order Functions = functions that takes or return other functions
// 2 or more arrows means its  a High Order Function
//Functions 1st class citzens == DATA, they can be saved, returned, flow through your app like vars

const exemplo1 = logger =>
    logger("Função passada como argumento igual uma variável qualquer")

//Logger é o console.log, passado como argumento , e a mensagem é a que está definida
// exemplo1(mensagem => console.log(mensagem))


//Recebe uma função, adiciona uma msg e retorna a função 
const createMusic = logger => msg => 
    logger(`${msg.toUpperCase()}!!!!`)
    

const music = createMusic(msg => console.log(msg))
music("Shop Suey")


