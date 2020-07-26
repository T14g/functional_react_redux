const umSegundo = () => 1000
const geHora    = () => new Date()
const limpar    = () => console.clear()
const log       = message => console.log(message)

const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)))

const serializaTempo = date => ({
    horas : date.getHours(),
    minutos: date.getMinutes(),
    segundos: date.getSeconds()
})

const formatarTempo = tempoRelogio => ({
    ...tempoRelogio,
    horas: (tempoRelogio. horas > 12) ?
        tempoRelogio.horas - 12 :
        tempoRelogio.horas
})

const amOuPm = tempoRelogio => ({
    ...tempoRelogio,
    ampm: (tempoRelogio.horas >= 12) ? "PM" : "AM"

})

//Some high order functions now

//Pega uma função e retorna uma função com o tempo
const display = target => time => target(time)

const formataRelogio = format =>
    time =>
        format.replace("hh", time.horas)
            .replace("mm", time.minutos)
            .replace("ss", time.seconds)
            .replace("tt", time.ampm)

const adicionaZeros = key => tempoRelogio =>
    ({
        ...tempoRelogio,
        [key] : (tempoRelogio[key] < 10) ?
        "0" + tempoRelogio[key] :
        tempoRelogio[key]
    })

const converterEmTempoHumano = tempoRelogio =>
    compose(
        amOuPm,
        formatarTempo(tempoRelogio)
    )

const doisDigitos = tempoRelogio =>
    compose(
        adicionaZeros("hours"),
        adicionaZeros("minutes"),
        adicionaZeros("seconds")
    )(tempoRelogio)


const startRelogio = () => 
    setInterval(
        compose(
            limpar,
            geHora,
            serializaTempo,
            converterEmTempoHumano,
            doisDigitos,
            formataRelogio("hh:mm:ss tt"),
            display(log)
        ),
        umSegundo()
    )
    
startRelogio()

//Obs contém bug