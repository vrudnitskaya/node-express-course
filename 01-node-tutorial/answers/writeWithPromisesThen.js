const { writeFile, readFile } = require("fs").promises;
const path = require("path");

const filePath = path.resolve(__dirname, "./temp.txt");

writeFile(filePath, "One\n", { flag: "a" })
    .then(() => writeFile(filePath, "Two\n", { flag: "a" }))
    .then(() => writeFile(filePath, "Buckle My Shoe\n", { flag: "a" }))
    .then(() => readFile(filePath, "utf8"))
    .then(data => console.log("File content:", data))
    .catch(error => console.log(error))