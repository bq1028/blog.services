/**
 * 内容 dao
 * @author Philip
 */

module.exports = app => {
    const { STRING, INTEGER } = app.Sequelize;

    const User = app.model.define('content', {
        id: { 
          type: INTEGER, 
          primaryKey: true, 
          autoIncrement: true
        },
        username: STRING(50),
        userpass: STRING(32)
    }, {
        freezeTableName: true,
        timestamps: false
    });

    return User;
};
