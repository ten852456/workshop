const express = require('express')
const compression = require('compression')

const app = express()
const port = process.env.PORT || 3000

const shouldCompress = (req, res) => {
    if (req.headers['x-no-compression']) {
        // Will not compress responses, if this header is present
        return false;
    }
    // Resort to standard compression
    return compression.filter(req, res);
};
// Compress all HTTP responses
app.use(compression({
    // filter: Decide if the answer should be compressed or not,
    // depending on the 'shouldCompress' function above
    filter: shouldCompress,
    // threshold: It is the byte threshold for the response 
    // body size before considering compression, the default is 1 kB
    threshold: 0
}));


app.get('/', (req, res) => {
    const animal = `elephent`
    res.type('text/plain')
    res.send(animal)
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