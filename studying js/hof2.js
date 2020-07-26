// Primeiro tipo de HOF 
// filter, map, reduce, todas recebem funções como argumento 

//HOF que retornam outras funções ajudam em assynchronous programming

//Currying == hold a value until the rest is supplied in future
    //ex

    // const userLogs = userName => msg => console.log(`${username} have ${msg} things `)

    // const log = userLogs("usuarioFicticeo");
    // log("isso chama o log para aquele user e fica user -> msg no print")
        // getFakestuff(20)// then the currying call this 
        //e fica user-> resposta do getFakeStuff

    //Recursion, yeah you call yourself again

//Countdown using recursion

const countDown = (n, fn) => {
    fn(n)
    return (n > 0) ? countDown(n-1, fn) : n
} 

//n é o primeiro valor segundo a countDown, n=> fn(n), é só a estrutura 
// countDown(100, n => console.log(n))

// Recursão > for loops

//Retrive info from an object using recursion


const runescape = {
    type: "game",
    data : {
        type: "mmorpg",
        info:  {
            id: "T14g",
            bank : {
                main: "ags",
                spec: "dragon claws"
            }
        }
    }
}

const deepPick = (fields, object = {}) => {
    const [first, ...remaining] = fields.split(".");

    return (remaining.length > 0) ?
        deepPick(remaining.join("."), object[first]) :
        object[first]
}

// console.log(deepPick("data.info.bank.spec", runescape));

// Functional programming breaks logic in small pure functions focued on specific tasks
    // You can chain
    // .replace(0)
    // .replace(1)
    // .replace(2)
// Objetivo: criar funções de high order em uma composição de funções simples 

// Tips:

// Keep data immutable
// Keep functions pure
// Use recursion over loop