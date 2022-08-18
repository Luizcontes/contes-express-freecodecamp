let express = require('express');
let app = express();
require('dotenv').config()


const absolutePath = __dirname + '/public'
console.log(absolutePath)

app.use('/public', express.static(absolutePath))

const pagePath = __dirname + '/views/index.html'
app.get('/', (req, res) => {
    res.sendFile(pagePath)
})

app.get('/json', (req, res) => {
    
    const msg = { message: 'Hello json'}
    if(process.env.MESSAGE_STYLE === 'uppercase') {
        msg.message = msg.message.toLocaleUpperCase()
    }

    res.json(msg)
})




 module.exports = app;
