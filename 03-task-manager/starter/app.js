const express = require('express');
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require('./db/connect');
require('dotenv').config();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("./public"));

app.get('/hello',  (req, res) => {
    res.send('Task Manager App');
});

app.use('/api/v1/tasks', tasks);

const port = 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`Server is running on http://localhost:${port}`));
    } catch (error) {
        console.log(error);
    }
};

start();

