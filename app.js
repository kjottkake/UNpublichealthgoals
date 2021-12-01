let day = 0;
// types: social, active, nutrition, community
let missions = [
    {
        "type": "active",
        "name": "pushups" ,
        "challenge": "Do 12 pushups."
    },
    {
        "type": "active",
        "name": "walk",
        "challenge": "Walk for 30 minutes."
    },
    {
        "type": "active",
        "name": "yoga",
        "challenge": "Do yoga for 35 minutes."
    },
    {
        "type": "active",
        "name": "ball",
        "challenge": "Play a ball game for 30 minutes."
    },
    {
        "type": "nutrition",
        "name": "fruits",
        "challenge": "Eat 2 fruits today."
    },
    {
        "type": "nutrition",
        "name": "research",
        "challenge": "Do some online search about the benefits of healthy eating."
    },
    {
        "type": "social",
        "name": "talk",
        "challenge": "Call 2 friends."
    }
]

let getTask = () => {
    max = missions.length;
    let num = Math.floor(Math.random() * max);
    console.log(num)
    document.getElementById("task").innerHTML = missions[num].challenge;
}
