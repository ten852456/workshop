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

let dresses = [
  { id: 1, type: 'A-line', rentalDate: '2023-03-20' },
  { id: 2, type: 'Ball Gown', rentalDate: '2023-04-02' },
  { id: 3, type: 'Mermaid', rentalDate: '2023-03-25' },
];

//change RentalDates to dialy
const updateRentalDates = () => {
  const currentDate = new Date().toISOString().slice(0, 10);
  dresses.forEach((dress) => {
    dress.rentalDate = currentDate;
  });
};
updateRentalDates();

//GET
app.get('/dresses', (req, res) => {
  res.send(dresses);
});

//GET by id
app.get('/dresses/:id', (req, res) => {
  const dress = dresses.find((d) => d.id === parseInt(req.params.id));
  if (!dress) res.status(404).send('Dress not found');
  res.send(dress);
});

//POST
app.post('/dresses', (req, res) => {
  const dress = {
    id: dresses.length + 1,
    type: req.body.type,
    rentalDate: req.body.rentalDate
  };
  dresses.push(dress);
  res.send(dress);
});

//PUT
app.put('/dresses/:id', (req, res) => {
  const dress = dresses.find((d) => d.id === parseInt(req.params.id));
  if (!dress) res.status(404).send('Dress not found');

  dress.type = req.body.type || dress.type;
  dress.rentalDate = req.body.rentalDate || dress.rentalDate;

  res.send(dress);
});

//DELETE
app.delete('/dresses/:id', (req, res) => {
  const dressIndex = dresses.findIndex((d) => d.id === parseInt(req.params.id));
  if (dressIndex === -1) res.status(404).send('Dress not found');

  dresses.splice(dressIndex, 1);
  res.send('Dress deleted');
});


app.use((req, res) => {
  res.type('text/plain')
  res.status(404)
  res.send('404 not found')
})

app.listen(port,
  () => console.log(`server is running on PORT: ${port}`))

