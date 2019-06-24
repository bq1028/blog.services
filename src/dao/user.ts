/**
 * 用户 dao
 * @author Philip
 */

module.exports = app => {
    const { STRING, INTEGER } = app.Sequelize;

    const User = app.model.define('user', {
        id: { 
          type: INTEGER, 
          primaryKey: true, 
          autoIncrement: true,
        },
        username: STRING(50),
        sex: STRING(4),
        userpass: STRING(32),
    }, {
        freezeTableName: true,
        timestamps: false,
    });

    return User;
};
