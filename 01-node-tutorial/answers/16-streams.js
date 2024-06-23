const { createReadStream } = require('fs');

const stream = createReadStream("../content/big.txt", {
    encoding: "utf8",
    highWaterMark: 200,
});

let counter = 0;

stream.on("data", (result) => {
    counter++;
    console.log(result);
});

stream.on("end", () => {
    console.log(`${counter} chunks received`);
});

stream.on("error", (err) => {
    console.log(err.message);
});