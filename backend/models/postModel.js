const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

//POST CONTÉM TITULO, CONTEUDO, AUTOR E DATA
const Post = sequelize.define("Post", {
  title: { type: DataTypes.STRING, allowNull: false },
  content: { type: DataTypes.STRING, allowNull: false },
  author: { type: DataTypes.STRING, allowNull: false },
  createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
})

module.exports = Post;
