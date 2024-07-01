//console.log('Express Tutorial')
const express = require('express');
const app = express();
const port = 3000;
const { products } = require("./data");

app.use(express.static('./public'));

app.get('/api/v1/test', (req, res) => {
    res.json({ message: "It worked!" });
});

app.get('/api/v1/products', (req, res) => {
    res.json(products);
});

app.get('/api/v1/products/:productID', (req, res) => {
    const idToFind = parseInt(req.params.productID);
    const product = products.find((product) => product.id === idToFind);

    if (!product) {
        return res.status(404).json({ message: "That product was not found." });
    }

    res.json(product);
});

app.get('/api/v1/query', (req, res)=> {
    const { search, limit, price } = req.query;
    const queryProducts = products
                            .filter(product => product.name.startsWith(search) && product.price < Number(price))
                            .slice(0, limit || products.length);
    if(queryProducts.length< 1) {
        return res.status(200).send('No products matched your search');
    };
    res.status(200).json(queryProducts);
})

app.all('*', (req, res)=> {
    res.status(404).send('404 error');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});