"use strict";
import { DataTypes, Model, Optional, Sequelize, ForeignKey } from "sequelize";
const { generateRandomKeyword } = require("generate");

import { UserTier_Attributes } from "shared-types";

type User_tierCreationAttributes = Optional<UserTier_Attributes, "id">;

class User_tier extends Model<UserTier_Attributes, User_tierCreationAttributes> {
  declare id: number;
  declare keyword: string;

  declare name:string;

  declare createdAt: Date;
  declare updatedAt: Date;

 static associate(models:any){
    User_tier.hasMany(
        models.User,
        {foreignKey:'tier_id',sourceKey:'keyword'}
    )
 }
}


export default (sequelize: Sequelize) => {
  User_tier.init(
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
      name:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true 
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
      tableName:"User_tier",
      sequelize,
      hooks:{
        beforeCreate:(User_tier:UserTier_Attributes)=>{
          if(!User_tier.keyword){
            User_tier.keyword = `${generateRandomKeyword(16)}`
          }
        }
      }
    }
  );
  return User_tier;
};
