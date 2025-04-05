const Post = require("../models/postModel");
//* CONTÉM FUNÇÕES RELACIONADAS A POSTS


//FUNÇÃO CRIAR POST
const createPost = async (req, res) => {

  const { title, content, author, authorId } = req.body;

  try {

    const newPost = await Post.create({ title, content, author, authorId });

    res.status(201).json({ newPost });
  } catch (error) {
    res.status(500).json({ message: "An error occurred trying to create a post", error});
  }

}

//FUNÇÃO EDITAR POST
const editPost = async (req, res) => {

  const { id } = req.params;
  const { title, content, author, authorId } = req.body;

  try {
    
    const existingPost = await Post.findOne({ where: { id } });

    if(!existingPost) {
      res.send("Post not found");
      return;
    }

    const updatedPost = await Post.update(
      { title, content, author, authorId }, 
      { where: { id } }
    );

    res.status(200).json({ message: "Post updated Successfully"});
  } catch (error) {
    res.status(500).json({ message: "An error occurred trying to update a post", error});
  }
}

//FUNÇÃO APAGAR POST
const deletePost = async (req, res) => {

  const { id } = req.params;

  try {
    
    const existingPost = await Post.findOne({ where: { id } });

    if(!existingPost) {
      res.send("Post not found");
      return;
    }

    const deletePost = await Post.destroy(
      { where: { id } }
    );

    res.status(200).json({ message: "Post deleted Successfully"});
  } catch (error) {
    res.status(500).json({ message: "An error occurred trying to delete a post", error });
  }
}

//FUNÇÃO LISTAR POSTS
const listPosts = async (req, res) => {
  try {

    const posts = await Post.findAll();

    res.status(200).json({ posts });
  } catch (error) {
    res.status(500).json({ message: "An error occurred trying to find the items" });
  }
}
//TODO TEMOS QUE ENVIAR O ID DAS POSTAGENS JUNTO PORQUE O MÉTODO EDIT E APAGAR ACIMA PRECISAM DELAS PARA ACHAR O POST

//FUNÇÃO LISTAR POSTS USER
const listPostsUser = async (req, res) => {

  const userId = req.user.uid;

  try {

    const Userposts = await Post.findAll({ where: { authorId: userId } });

    res.status(200).json({ Userposts });
  } catch (error) {
    res.status(500).json({ message: "An error occurred trying to find the items", error });
  }
}


module.exports = { createPost, editPost, deletePost, listPosts, listPostsUser };