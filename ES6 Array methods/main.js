let vegetables = [
    { name: "Eggplant", color: "purple" },
    { name: "Carrot", color: "orange" },
    { name: "Squash", color: "orange" },
    { name: "Tomatoe", color: "red" },
    { name: "Onion", color: "white" },
    { name: "Sweet Potato", color: "orange" }
]


let orangeVegs = vegetables.filter(v => v.color === "orange")
orangeVegs.forEach(ov => console.log(ov.name))

let people = [
    { salary: 1300, goodPerformance: false },
    { salary: 1500, goodPerformance: true },
    { salary: 1200, goodPerformance: true },
    { salary: 1700, goodPerformance: false },
    { salary: 1600, goodPerformance: true },
]

const increase = person => person.goodPerformance ? person.salary += 300 :  person.salary

people.forEach(increase)
people.forEach(p => console.log(p.salary)) //should print 1300, 1800, 1500, 1700, 1900 (on separate lines)

let messagesFromDad = ["HI HONEY", "HOW WAS SCHOOL??", "DID YOU EAT TODAY?", "I CAN'T FIND THE REMOTE CONTROL"]
let stopShouting = messagesFromDad.map(mfd => mfd.toLowerCase())
console.log(stopShouting)

let posts = [
    {
        id: 0, text: "I'm not here",
        comments: [{ id: 0, text: "support that" }]
    },
    {
        id: 1, text: "Find me",
        comments: [
            { id: 0, text: "here I am" },
            { id: 1, text: "rock you like a hurricane" },
            { id: 2, text: "dum dum" }]
    },
    {
        id: 2, text: "Where's waldo anyway",
        comments: [
            { id: 0, text: "who's waldo" },
            { id: 1, text: "he's called Effi" }]
    },
    {
        id: 3, text: "Poof",
        comments: [{ id: 0, text: "like magic" }]
    }
]

const findById = id => posts.find(p => p.id === id)

const findCommentByID = function(postID, commentID) {
    let post = findById(postID)
    return post.comments.find(c => c.id == commentID)
}

console.log(findCommentByID(1, 0))

let movies = [
    { title: "Dareangel", studio: "Marvel", year: 2023 },
    { title: "Batterfly", studio: "Fox", year: 2021 },
    { title: "League of Ordinary People", studio: "Blizzard", year: 2025 },
    { title: "Thor: Ragnarok", studio: "Marvel", year: 2017 },
]

movies.some(m => m.studio == "Marvel") ? console.log("Let's go watch some movies") : console.log("Let's stay home")
movies.every(m => m.year > 2020) ? console.log("Futuristic stuff") : console.log("Yawn")