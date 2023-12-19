const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    return res.send('lista de marcas');
});

router.get('/:id', (req, res) => {
    return res.send('lista de marcas');
});

router.post('/', (req, res) => {
    return res.send('Cria uma marca');
});

router.post('/:id', (req, res) => {
    return res.send('Edita uma marca');
});

router.delete('/:id', (req, res) => {
    return res.send('Delete uma marca');
});

module.exports = router;