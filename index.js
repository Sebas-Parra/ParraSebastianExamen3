const express = require('express');
const { log } = require('node:console');
const app = express();
const PORT = 3000;

app.get('/', (_req, res) => {
    res.send('Integración continua funcionando');
});

app.listen(PORT, () => {
    console.log(`Servidor esta ejecutandose en el puerto ${PORT}`);
});