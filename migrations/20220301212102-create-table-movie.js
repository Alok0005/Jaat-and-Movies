'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      
  await queryInterface.createTable('movies', { 
       id: {
         type:Sequelize.INTEGER ,
         primaryKey:true,
         allowNull:false,
         autoIncrement:true,
       }, 
       name: {
        type:Sequelize.STRING ,
        allowNull:false,
      }, 
      description: {
        type:Sequelize.STRING ,
        allowNull:true,
      }, 
      price:{
        type:Sequelize.FLOAT,
        allowNull:false,
      },
      createdAt: {
        type:Sequelize.DATE ,
        allowNull:false,
      }, 
      updatedAt: {
        type:Sequelize.DATE ,
        allowNull:false,
      }, 
   });
    
  },
 async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('movies');
  }
};
