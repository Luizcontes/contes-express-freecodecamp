let express = require('express');
let app = express();


const absolutePath = __dirname + '/public'
console.log(absolutePath)

app.use('/public', express.static(absolutePath))

const pagePath = __dirname + '/views/index.html'
app.get('/', (req, res) => {
    res.sendFile(pagePath)
})




 module.exports = app;
