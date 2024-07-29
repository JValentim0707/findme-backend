'use strict';

module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define('users', {
    first_name: {
      type: DataTypes.STRING(),
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING(),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(),
      allowNull: false
    },
    born_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    role: {
      type: DataTypes.STRING(),
      allowNull: false
    },
    active: {
      type: DataTypes.BOOLEAN(),
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
  }, 
  {

    timestamps: false,
    paranoid: false,
    underscored: true
  });
  
  return User;
};