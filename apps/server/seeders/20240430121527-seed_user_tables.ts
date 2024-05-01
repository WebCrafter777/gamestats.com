'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "User_tier",
      [
        {
          name: "normal",
          keyword:"ASDINDSA41idadsaNJDSA",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "moderator",
          keyword:"AFGVxDSA41idadsaNJDSA",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "owner",
          keyword:"ASJKNHIUODASPOA41idadsaNJDSA",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('User_tier',{},{})
  },
};
