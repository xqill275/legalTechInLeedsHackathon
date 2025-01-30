const express = require('express');

const app = express();

app.set('view engine', 'hbs');

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.get('/', (req, res) => {
    res.render('index');
});
