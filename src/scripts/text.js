// 0: when leo hasn't spoken to shant
// 1: when leo has spoken to shant, and polly hewert are false
// 2: when polly is true
// 3: when hewert is true

const polly = {
    0: [`Can't talk, must code`],
    1: [`Can't talk right now`],
    2: [`Thanks Leo! Doesn't the weather feel so nice today?`],
    3: [`Can't talk right now`]
}

const hewert = {
    0: [`Can't talk right now`],
    1: [`Can't talk right now`],
    2: [`I'm never going to get my burjer TT_TT`],
    3: [`Thanks Leo! I can finally have that burjer I was craving.`]
}

const catthew = {
    0: [`Hi! I'm Catthew`],
    1: [`Cat Academy is created by Christine Yang (she/her/hers).`,
        `You can check her out via the social links below.`],
    2: [`Cat Academy is created by Christine Yang (she/her/hers).`,
        `You can check her out via the social links below.`],
    3: [`Cat Academy is created by Christine Yang (she/her/hers).`,
        `You can check her out via the social links below.`]
}

const shant = {
    0: [`Welcome to Cat Academy! My name is Shant!`, 
        `Everyone is hard at work here.`,
        `Have you seen Hewert and Polly?`,
        `They may need you to help them out!`,
        `Let's find their friends to help solve their bugs. Teamwork is dreamwork!`],
    1: [`Is there anyone on the map who you didn't speak to yet?`],
    2: [`Is there anyone on the map who you didn't speak to yet?`],
    3: [`Is there anyone on the map who you didn't speak to yet?`]
}

// Grita and Catvin are going to free Holly

const grita = {
    0: [`You can call me Grita Kween!`],
    1: [`Which represents an SQL full join?`,
        ``
        ``],
    2: [`Martin Fowler once said,`, 
        `Good programmers write code that humans can understand.`],
    3: [``] // some quote
}

const catvin = {
    0: [``], // some quote
    1: [``,
        ``
        ``],
    2: [``], // some quote
    3: [``] // some quote
}

// Han and Valeria are going to free Hewert

const han = {
    0: [`Han here!`], // some info
    1: [``], // some info
    2: [``,
        ``,
        ``],
    3: [``] // some info
}

const valeria = {
    0: [`It's been a long time coming young grasshopper.`],
    1: [``], // some advice
    2: [``,
        ``,
        ``],
    3: [``] // some advice
}

export {
    polly,
    hewert
}