const express = require('express');
const cors = require('cors');

const brandRoutes = require('./src/routes/brandsRoutes')

const app = express();
const port = 8000;

app.get('/', (req, res) => {
    return res.send('Olá mundo e Patos🦆🦆!');
});

app.get('/docs', (req, res) => {
    return res.send('Documentação da aplicação!');
});

app.use('/brands', brandRoutes);

app.all('*', (req, res) => {
    return res.send(JSON.stringify({
        type: 'error',
        message:'este endpoint não existe'
    }));
});

app.listen(port,() => {
    console.log(`Servidor de pé no link: http://localhost:${port}`)
});