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
    1: [`Which SQL statement inserts new data in a database?`,
        `INSERT INTO`,
        `INSERT NEW`],
    2: [`Martin Fowler once said,`, 
        `Good programmers write code that humans can understand.`],
    3: [`It’s not a bug — it’s an undocumented feature`]
}

const catvin = {
    0: [`I don't like computer science jokes.`,
        `...`,
        `Not one bit`],
    1: [`Which is true about React?`,
        `It uses server-side rendering`, 
        `It manipulates the real DOM`], // it uses the virtual DOM
    2: [`Why did the programmer quit his job?`,
        `...`,
        `because he didn't get arrays`],
    3: [`You had me at Hello World`]
}

// Han and Valeria are going to free Hewert

const han = {
    0: [`Han here!`],
    1: [`To understand what recursion is, you must first understand recursion.`],
    2: [`Is Javascript multi-threaded?`,
        `Yes`, // no! it's single threaded with one call stack and one memory heap
        `No`],
    3: [`There is an easy way and a hard way.`,
        `The hard part is finding the easy way.`]
}

const valeria = {
    0: [`It's been a long time coming young cathopper.`],
    1: [`The alternative to the ternary operation is to use the AND (&&) operation`],
    2: [`Is ascending by selectors in CSS possible?`,
        `Yes`,
        `No`],
    3: [`Learning how to test your code is a must!`]
}

export {
    polly,
    hewert,
    catthew,
    shant,
    grita,
    catvin,
    han,
    valeria
}