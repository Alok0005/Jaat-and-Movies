'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Movie.init({
     id: {
      type:DataTypes.INTEGER ,
      primaryKey:true,
      allowNull:false,
      autoIncrement:true,
    }, 
    name: {
     type:DataTypes.STRING ,
     allowNull:false,
   }, 
   description: {
     type:DataTypes.STRING ,
     allowNull:false,
   }, 
   price : {
     type:DataTypes.Float,
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
    modelName: 'Movie',
    tableName: "movies",
  });
  return Movie;
};