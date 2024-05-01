'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('User_tier', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED,
      },
      keyword: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      name:{
        type: Sequelize.STRING,
        allowNull:false,
        unique:true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
    
    await queryInterface.createTable('User', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED,
      },
      keyword: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique:true
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      last_login: {
        type: Sequelize.DATE,
      },
      hashed_password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      country: {
        type: Sequelize.STRING,
        allowNull: false
      },
      profile_image:{
        type: Sequelize.STRING,
      },
      banner: {
        type: Sequelize.STRING,
      },
      steam_id: {
        type: Sequelize.STRING,
      },
      google_id: {
        type: Sequelize.STRING,
      },
      tier_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'User_tier', 
          key: 'keyword'
        },
        onUpdate: 'CASCADE', 
        onDelete: 'CASCADE',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('User');
    await queryInterface.dropTable('User_tier');
  }
};
