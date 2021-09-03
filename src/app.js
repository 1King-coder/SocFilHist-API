import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';

dotenv.config();

import './database';

import express from 'express';

import studentRoutes from './routes/studentR';
import userRoutes from './routes/userR';
import tokenRoutes from './routes/tokenR';
import roleRoutes from './routes/roleR';
import QanswersRoutes from './routes/QanswersR';

const whiteList = [
  'http://192.168.1.9',
  'http://192.168.1.9:81',
  'http://localhost:3000',
];

const corsOptions = {
  origin: (origin, callback) => {
    if ((whiteList).indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors(corsOptions));
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/students', studentRoutes);
    this.app.use('/user', userRoutes);
    this.app.use('/token', tokenRoutes);
    this.app.use('/role', roleRoutes);
    this.app.use('/questions', QanswersRoutes);
  }
}

export default new App().app;
