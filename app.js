let day = 0;
let challenges = ["Do 30 pushups today.", "Walk for 35 minutes today.", "Do morning yoga." ]

// types: social, active, nutrition, knowledge


let missions = [
    {
        "type": "active",
        "name": "pushups" ,
        "challenge": "Do 12 pushups."
    },
    {
        "type": "active",
        "name": "walk",
        "challenge": "Walk for 30 minutes"
    },
    {
        "type": "active",
        "name": "yoga",
        "challenge": "Do yoga for 35 minutes"
    },
    {
        "type": "social",
        "name": "talk",
        "challenge": "Call 2 friends."
    }
]

let pushups = () => {
    let max = 100;
    return "Do " + max + " pushups today."
}

let walk = () => {
    let max = 60;
    return "Walk " + max + " minutes today."
}

let getTask = () => {
    max = challenges.length + 1;
    let num = Math.floor(Math.random() * max);
    console.log(num)
    document.getElementById("task").innerHTML = missions[num].challenge;
    // return "Do 30 minutes of yoga!"
}
