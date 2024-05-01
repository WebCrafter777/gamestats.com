"use strict";
import { DataTypes, Model, Optional, Sequelize, ForeignKey } from "sequelize";
const { generateRandomKeyword } = require("generate");

import {  User_Attributes } from "shared-types";
import database from './'
type UserCreationAttributes = Optional<User_Attributes, "id">;

class User extends Model<User_Attributes, UserCreationAttributes> {
  declare id: number;
  declare keyword: string;
  declare email: string;
  declare username: string;
  declare last_login: Date;
  declare hashed_password: string;
  declare country: string;
  declare profile_image:string | null;
  declare banner: string | null;
  declare steam_id: string;
  declare google_id: string;
  declare tier_id: ForeignKey<string>;

  declare createdAt: Date;
  declare updatedAt: Date;

  static associate(models:any){
    this.belongsTo(models.User_tier,{
      foreignKey:'tier_id',
      targetKey:'keyword',
      onDelete:"CASCADE",
      onUpdate:"CASCADE"
    })
  }
}


export default (sequelize: Sequelize) => {
  User.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER.UNSIGNED,
      },
      keyword: {
        type: DataTypes.STRING,
        allowNull:false,
        unique:true
      },
      username: {
        type: DataTypes.STRING,
        allowNull:false,
        unique:true,
      },
      email:{
        type: DataTypes.STRING,
        allowNull:false,
        unique:true
      },
      last_login: {
        type: DataTypes.DATE,
      },
      hashed_password: {
        type: DataTypes.STRING,
        allowNull:false
      },
      profile_image:{
        type: DataTypes.STRING,
      },
      country: {
        type: DataTypes.STRING,
        allowNull:false
      },
      banner: {
        type: DataTypes.STRING,
      },
      steam_id: {
        type: DataTypes.STRING,
      },
      google_id: {
        type: DataTypes.STRING,
      },
      tier_id: {
        type: DataTypes.STRING,
      },

      

      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      tableName:"User",
      sequelize,
      hooks:{
        beforeValidate: async(user:User_Attributes)=>{
          if(!user.keyword){
            user.keyword = `${generateRandomKeyword(16)}`
          }
          if(!user.tier_id){
            const firstUserRole = await database.User_tier.findOne({
              where: {
                name: 'normal'
              }
            });
            if(firstUserRole){
              user.tier_id = firstUserRole.keyword; ``
            }
          }
        }
      }
    }
  );
  return User;
};
