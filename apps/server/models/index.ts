"use strict";

import process from "process";

import fs from 'fs'
import path from 'path'


import {Sequelize,DataTypes} from 'sequelize'
import mysql2 from 'mysql2'; 

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db: any = {};

let sequelize: any;

  sequelize = new Sequelize(process.env.DATABASE_URL  || '',{
    dialect:'mysql',
    dialectModule:mysql2
  });


fs.readdirSync(__dirname)
.filter((file: any) => {  
  if(env === 'development'){
    return (
      file.indexOf(".") !== 0 &&
      file !== basename &&
      file.slice(-3) === ".ts" &&
      file.indexOf(".test.ts") === -1
    );
  }else{
    return (
      file.indexOf(".") !== 0 &&
      file !== basename &&
      file.slice(-3) === ".js" &&
      file.indexOf(".test.js") === -1
    );
  }
})
.forEach((file: any) => {
  const model = require(path.join(__dirname, file)).default(
    sequelize,
    DataTypes
  );
  db[model.name] = model;
});

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});


db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db