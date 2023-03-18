const express = require('express')
const compression = require('compression')
const cors = require('cors')
const bodyParser = require('body-parser')


const app = express()
const port = process.env.PORT || 8000

app.use(cors());
app.use(bodyParser.json());

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
  { id: 1, type: 'A-line', rentalDate: '2023-03-20', picUrl: 'https://www.awbridal.com/wedding-blog/wp-content/uploads/2021/03/dana-aw-edits-31.jpg', price: 2500 },
  { id: 2, type: 'Ball Gown', rentalDate: '2023-04-02', picUrl: 'https://www.awbridal.com/wedding-blog/wp-content/uploads/2021/03/youtube-challenge-38.jpg', price: 3500 },
  { id: 3, type: 'Mermaid', rentalDate: '2023-03-25', picUrl: 'https://www.awbridal.com/wedding-blog/wp-content/uploads/2021/03/AW-Anias-Wedding-Dress-1.jpg', price: 4000 },
  { id: 4, type: 'Sheath', rentalDate: '2023-02-20', picUrl: 'https://www.awbridal.com/wedding-blog/wp-content/uploads/2021/03/4Q0A5114.jpg', price: 4300 },
  { id: 5, type: 'Column', rentalDate: '2023-02-20', picUrl: 'https://www.awbridal.com/wedding-blog/wp-content/uploads/2021/03/aw-giana-wedding-dress.jpg', price: 2800 },
  { id: 6, type: 'Trumpet', rentalDate: '2023-02-20', picUrl: 'https://www.awbridal.com/wedding-blog/wp-content/uploads/2021/03/Londonelopement-98.jpg', price: 5500 },
  { id: 7, type: 'Empire', rentalDate: '2023-02-20', picUrl: 'https://www.awbridal.com/wedding-blog/wp-content/uploads/2021/03/AW-Raphael-Wedding-Dress.jpg', price: 6200 },
  { id: 8, type: 'Tea-Length', rentalDate: '2023-02-20', picUrl: 'https://www.awbridal.com/wedding-blog/wp-content/uploads/2021/03/Tea-Length-Wedding-Dresses_%E5%89%AF%E6%9C%AC.jpg', price: 4500 },

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
    rentalDate: req.body.rentalDate,
    picUrl: req.body.picUrl,
    price: req.body.price,
  };
  dresses.push(dress);
  res.json('Add Dress Complete!');
});

//PUT
app.put('/dresses/:id', (req, res) => {
  const dress = dresses.find((d) => d.id === parseInt(req.params.id));
  if (!dress) res.status(404).send('Dress not found');

  dress.type = req.body.type || dress.type;
  dress.rentalDate = req.body.rentalDate || dress.rentalDate;
  dress.picUrl = req.body.picUrl || dress.picUrl;
  dress.price = req.body.price || dress.price;
  

  res.json('Dress has updated');
});

//UPDATE RentalDate by id
app.put('/dresses/:id/rentaldate', (req, res) => {
  const dress = dresses.find((d) => d.id === parseInt(req.params.id));
  if (!dress) res.status(404).send('Dress not found');
  
  dress.rentalDate = req.body.rentalDate;

  res.json('Rental Success!');
});



//DELETE
app.delete('/dresses/:id', (req, res) => {
  const dressIndex = dresses.findIndex((d) => d.id === parseInt(req.params.id));
  if (dressIndex === -1) res.status(404).send('Dress not found');

  dresses.splice(dressIndex, 1);
  res.json('Dress deleted');
});


app.use((req, res) => {
  res.type('text/plain')
  res.status(404)
  res.send('404 not found')
})

app.listen(port,
  () => console.log(`server is running on PORT: ${port}`))

