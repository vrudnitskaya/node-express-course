const EventEmitter = require("events");
const customEmitter = new EventEmitter();

let childAge = 7;
let currentYear = 2024;

setInterval(() => {
    customEmitter.emit("birthday", "daughter", "Eva", childAge, currentYear)
}, 2000);

customEmitter.on("birthday", (sex, name, age, year)=>{
    console.log(`Your ${sex} ${name} will turn ${childAge} years old in ${currentYear} year`)
    childAge++;
    currentYear++;
});