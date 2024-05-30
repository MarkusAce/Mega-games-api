const express = require('express');
const app = express();
const port = 3001;

    const { getJuegos } = require('./controllers/getJuegos.js');
    const { getJuegosID } = require('./controllers/getJuegosID.js');
    const { getJuegosConsola } = require('./controllers/getJuegosConsola.js');
    const { getJuegosName } = require('./controllers/getJuegosName.js');

app.all('*', function (req, res, next) {
    res.set('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/', getJuegos)

app.get('/byId/:id', getJuegosID)

app.get('/byConsola/:consola', getJuegosConsola)

app.get('/byName/:name', getJuegosName)

app.listen(port, () => {
    console.log('Server running on port', port);
})