const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'views')));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/product', (req, res) => {
    res.render('product');
});

exports.start = () => {
    app.listen(3000, () => {
        console.log('Listening at port 3000');
    });
};
