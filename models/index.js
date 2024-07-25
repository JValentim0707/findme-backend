'use strict';

import fs from 'fs'
import path from 'path';
import Sequelize from 'sequelize';
import process from 'process';


const basename = path.basename(__filename);
const env = 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

const sequelize = new Sequelize({
  host: config.host,
  username: config.username,
  password: config.password,
  database: config.database,
  dialect: config.dialect,
  dialectModule: require('pg'),
  benchmark: true
})
// const sequelize = new Sequelize(config.database, config.username, config.password, config);

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
