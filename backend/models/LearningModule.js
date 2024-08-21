// backend/models/LearningModule.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const LearningModule = sequelize.define('LearningModule', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
});

export default LearningModule;
