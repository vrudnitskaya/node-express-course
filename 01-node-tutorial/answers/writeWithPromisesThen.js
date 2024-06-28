const { writeFile, readFile } = require("fs").promises;

writeFile("./temp.txt", "One\n", { flag: "a" })
    .then(() => writeFile("./temp.txt", "Two\n", { flag: "a" }))
    .then(() => writeFile("./temp.txt", "Buckle My Shoe\n", { flag: "a" }))
    .then(() => readFile("./temp.txt", "utf8"))
    .then(data => console.log("File content: ", data))
    .catch(error => console.log(error))