const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true })); // Use body-parser middleware for parsing URL-encoded bodies
app.use(bodyParser.json())

app.set('view engine', 'hbs');

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.use('/auth', require('./routes/auth'));

app.get('/', (req, res) => {
    res.render('index');
});
 
app.get('/login', (req, res) => {
    res.render('login')
});