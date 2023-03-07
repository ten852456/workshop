const express = require('express')
const compression = require('compression')
const cors = require('cors')
const bodyParser = require('body-parser')


const app = express()
const port = process.env.PORT || 3000

app.use(cors());

//gzip
const shouldCompress = (req, res) => {
    if (req.headers['x-no-compression']) {
        return false;
    }
    return compression.filter(req, res);
};

app.use(compression({
    filter: shouldCompress,
    threshold: 0
}));

const products = [
    {
      id: '1001',
      name: 'Node.js for Beginners',
      category: 'Node',
      price: 990
    },
    {
      id: '1002',
      name: 'React 101',
      category: 'React',
      price: 3990
    },
    {
      id: '1003',
      name: 'Getting started with MongoDB',
      category: 'MongoDB',
      price: 1990
    }
  ];
  
  app.get('/products', (req, res) => {
    res.json(products);
  });
  
  app.get('/products/:id', (req, res) => {
    const { id } = req.params;
    const result = products.find((product) => product.id === id);
    res.json(result);
  });
  
  app.post('/products', (req, res) => {
    const payload = req.body;
    res.json(payload);
  });
  
  app.put('/products/:id', (req, res) => {
    const { id } = req.params;
    res.json({ id });
  });
  
  app.delete('/products/:id', (req, res) => {
    const { id } = req.params;
    res.json({ id });
  });
  

app.get('/', (req, res) => {
    const animal = `elephent`
    res.type('text/plain')
    res.json({"admin" : "tete"})
})

app.get('/about', (req, res) => {
    res.type('text/plain')
    res.send('Server about')
})

app.use((req, res) => {
    res.type('text/plain')
    res.status(404)
    res.send('404 not found')
})

app.listen(port,
    () => console.log(`server is running on PORT: ${port}`))

