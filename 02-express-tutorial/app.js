//console.log('Express Tutorial')
const express = require('express');
const app = express();
const port = 3000;


app.use(express.static('./public'));

app.get('/api/v1/test', (req, res) => {
    res.json({ message: "It worked!" });
});

app.all('*', (req, res)=> {
    res.status(404).send('404 error');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});