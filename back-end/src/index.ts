import express from 'express';
import bodyParser from 'body-parser';
import playerRoutes from './routes/player.routes';
import { config } from './config/config';
import corsMiddleware from './middlewares/cors';
import swaggerUi from 'swagger-ui-express';
import fs from 'fs';
import path from 'path';

const app = express();

// Lê o arquivo de especificação Swagger
const swaggerDocument = JSON.parse(fs.readFileSync(path.join(__dirname, '../swagger.json'), 'utf8'));

// Configura o Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(corsMiddleware);

app.use(bodyParser.json());

app.use('/player', playerRoutes);

app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
});
