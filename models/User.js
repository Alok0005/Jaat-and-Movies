'use strict';
const {
  Model, DATE
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
    }
  }
  User.init({
    id: {
      type:DataTypes.INTEGER ,
      primaryKey:true,
      allowNull:false,
      autoIncrement:true,
    }, 
    email: {
     type:DataTypes.STRING ,
     allowNull:false,
   }, 
   password: {
     type:DataTypes.STRING ,
     allowNull:false,
   }, 
   createdAt: {
     type:DataTypes.DATE ,
     allowNull:false,
   }, 
   updatedAt: {
     type:DataTypes.DATE ,
     allowNull:false,
   }, 
  }, {
    sequelize,
    modelName: 'User',
    tableName:"users",
  });
  return User;
};