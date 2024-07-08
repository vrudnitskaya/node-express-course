const express = require('express');
const app = express();
const port = 3000;
const logger = require('./logger.js');
const peopleRouter = require('./routes/people.js');

app.use(express.static('./methods-public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(logger);

app.use('/api/v1/people', peopleRouter);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});