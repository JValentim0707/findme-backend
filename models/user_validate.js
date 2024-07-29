'use strict';

module.exports = function (sequelize, DataTypes) {
  const UserValidateEmail = sequelize.define('user_validates', {
    user_id: {
      type: DataTypes.UUID,
      foreignKey: true,
      references: {
        model: "users",
        key: "id"
      }
    },
    email: {
      type: DataTypes.STRING(),
      allowNull: false
    },
    code: {
      type: DataTypes.STRING(),
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at : {
      type: DataTypes.DATE,
      allowNull: false
    },
  }, 
  {
    timestamps: false,
    paranoid: false,
    underscored: true
  });

  UserValidateEmail.associate = (models) => {
    UserValidateEmail.belongsTo(models.users, {
      foreignKey: "user_id",
      target: 'id',
    });
  }
  
  return UserValidateEmail;
};'use strict';
