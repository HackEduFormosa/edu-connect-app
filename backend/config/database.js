import { Sequelize } from 'sequelize';
import path from 'path';
import dotenv from 'dotenv';

// Configurar dotenv para cargar el archivo .env desde la carpeta backend
dotenv.config({ path: path.resolve('.env') });

console.log({
  DB_NAME: process.env.DB_NAME,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_HOST: process.env.DB_HOST
});

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  logging: false,
});

export default sequelize;
