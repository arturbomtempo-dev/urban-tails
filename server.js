require('dotenv').config();
const express = require('express');
const animaisRoutes = require('./routes/animaisRoutes');
const errorHandler = require('./utils/errorHandler');
const setupSwagger = require('./docs/swagger');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/animais', animaisRoutes);

app.use(errorHandler);

setupSwagger(app);

app.listen(PORT, () => {
    console.log(`Servidor do Petshop rodando em http://localhost:${PORT}`);
});
