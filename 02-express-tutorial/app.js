const express = require('express');
const port = 3000;
const logger = require('./logger.js');
const peopleRouter = require('./routes/people.js');
const cookieParser = require('cookie-parser');
const authorize = require('./auth.js');
const app = express();

app.use(express.static('./methods-public'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.json());
app.use(logger);

app.use('/api/v1/people', peopleRouter);

app.post('/logon', (req, res) => {
	const { name } = req.body;
    if(!name) {
        return res.status(400).json({ success: false, message: "Please provide a name" })
    }
	res.cookie('name', name).status(201).json(`hello, ${name}`);
});

app.delete('/logoff', authorize, (req, res) => {
	const { user } = req;
	res.clearCookie("name").status(200).json(`${user} logged off`);
});

app.get('/test', authorize, (req, res) => {
	res.json(`${req.user} authorized`);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});