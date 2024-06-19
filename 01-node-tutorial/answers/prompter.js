const http = require("http");
var StringDecoder = require("string_decoder").StringDecoder;

const getBody = (req, callback) => {
  const decode = new StringDecoder("utf-8");
  let body = "";
  req.on("data", function (data) {
    body += decode.write(data);
  });
  req.on("end", function () {
    body += decode.end();
    const body1 = decodeURI(body);
    const bodyArray = body1.split("&");
    const resultHash = {};
    bodyArray.forEach((part) => {
      const partArray = part.split("=");
      resultHash[partArray[0]] = partArray[1];
    });
    callback(resultHash);
  });
};

// here, you could declare one or more variables to store what comes back from the form.
let randomNumber = Math.floor(Math.random() * 10) + 1;
let text = "Guess a number from 1 to 10:";
let color = "aliceblue";

// here, you can change the form below to modify the input fields and what is displayed.
// This is just ordinary html with string interpolation.
const form = () => {
  return `
  <body style="background-color:${color};">
  <p>${text}</p>
  <form method="POST">
  <input name="guess" type="number" min="1" max="10" required></input>
  <button type="submit">Submit</button>
  </form>
  </body>
  `;
};

const server = http.createServer((req, res) => {
  console.log("req.method is ", req.method);
  console.log("req.url is ", req.url);
  if (req.method === "POST") {
    getBody(req, (body) => {
      console.log("The body of the post is ", body);
      
      if (body["guess"]) {
        const currentGuess = parseInt(body["guess"]);
        
        if(!isNaN(currentGuess)){
          if(currentGuess === randomNumber) {
            text = "Congratulations! You won!";
            randomNumber = Math.floor(Math.random() * 10) + 1;
          } else if (currentGuess < randomNumber || currentGuess > randomNumber) {
            text = "Wrong number! Try again!"
          }
        }
      } else {
        text = "Error! Please enter a number between 1 and 10.";
      }
      // Your code changes would end here
      res.writeHead(303, {
        Location: "/",
      });
      res.end();
    });
  } else {
    res.end(form());
  }
});

server.listen(3000);
console.log("The server is listening on port 3000.");
