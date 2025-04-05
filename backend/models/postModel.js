const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

//POST CONTÉM TITULO, CONTEUDO, AUTOR E DATA
const Post = sequelize.define("Post", {
  title: { type: DataTypes.STRING, allowNull: false },
  content: { type: DataTypes.STRING, allowNull: false },
  author: { type: DataTypes.STRING, allowNull: false },
  authorId: { type: DataTypes.INTEGER, allowNull: false, references: { model: "Users", key: "id" } },
  createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
});

module.exports = Post;
