'use strict';

module.exports = function (sequelize, DataTypes) {
  const UserDetail = sequelize.define('user_details', {
    user_id: {
      type: DataTypes.UUID,
      foreignKey: true,
      references: {
        model: "users",
        key: "id"
      }
    },
    document: {
      type: DataTypes.STRING(),
      allowNull: false
    },
    postcode: {
      type: DataTypes.STRING(),
      allowNull: true
    },
    street: {
      type: DataTypes.STRING(),
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(),
      allowNull: true
    },
    state: {
      type: DataTypes.STRING(),
      allowNull: true
    },
    district : {
      type: DataTypes.STRING(),
      allowNull: true
    },
    number: {
      type: DataTypes.STRING(),
      allowNull: true
    },
    complement : {
      type: DataTypes.STRING(),
      allowNull: true
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

  UserDetail.associate = (models) => {
    UserDetail.belongsTo(models.users, {
      foreignKey: "user_id",
      target: 'id',
    });
  }
  
  return UserDetail;
};'use strict';
