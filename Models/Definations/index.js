let sequelize = require("../../common/dbConnection");
let user = require("./users/user");
let student = require("./users/student");

user.hasOne(student, {
  onDelete: "CASCADE",
  foreignKey: { name: "userid", allowNull: false, unique: true },
});

student.belongsTo(user, {
  onDelete: "CASCADE",
  foreignKey: { name: "userid", allowNull: false, unique: true },
});

const models = sequelize.models;
console.log(models);
const db = {};
db.sequelize = sequelize;
module.exports = { db, models };
