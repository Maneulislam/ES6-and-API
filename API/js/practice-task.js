
function delayedGretting(name, delaytime) {

    setTimeout(() => {
        console.log("Hello,", name);
    }, delaytime)
}

// delayedGretting("alice", 6000)



// Print a joke every 2 seconds
// After 10 seconds, stop printing

function tellJoke() {
    console.log("Meow Meow");
}

const every2 = setInterval(tellJoke, 2000);
console.log(every2);


setTimeout(() => {
    clearInterval(every2);
    console.log("Jokes Stopped");
}, 10000)



// Async await function

const api = async () => {
    const response = await fetch('https://v2.jokeapi.dev/joke/Programming?type=single')
    const data = await response.json()
    console.log(data);

    console.log(data.joke);
}
api();