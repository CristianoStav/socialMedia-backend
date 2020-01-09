import 'dotenv/config';
import './mongoose';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import rotas from '../routes/index';

const app = express();

app.use(cors({ origin: '*' }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

app.use(rotas);

export default app;
