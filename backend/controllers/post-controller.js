const Post = require("../models/postModel");
//* CONTÉM FUNÇÕES RELACIONADAS A POSTS



//FUNÇÃO CRIAR POST
const createPost = async (req, res) => {

  const { title, content, author } = req.body;

  try {
    
    const newPost = await Post.create({ title, content, author });

    res.status(201).json({ newPost });
  } catch (error) {
    res.status(500).json({ message: "An error occurred trying to create a post"});
  }

}

//FUNÇÃO EDITAR POST
const editPost = async (req, res) => {

  const { id, title, content, author } = req.body;

  try {
    
    const existingPost = await Post.findOne({ where: { id } });

    if(!existingPost) {
      res.send("Post not found");
      return;
    }

    const updatedPost = await Post.update(
      { title, content, author }, 
      { where: { id } }
    );

    res.status(200).json({ message: "Post updated Successfully"});
  } catch (error) {
    res.status(500).json({ message: "An error occurred trying to update a post"});
  }
}

//FUNÇÃO APAGAR POST
const deletePost = async (req, res) => {

  const { id } = req.body;

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
    res.status(500).json({ message: "An error occurred trying to delete a post"});
  }
}

//FUNÇÃO LISTAR POSTS
const listPosts = async (req, res) => {
  try {
    
    const posts = Post.findAll();

    res.status(200).json({ posts });
  } catch (error) {
    res.status(500).json({ message: "An error occurred trying to find the items" });
  }
}
//TODO TEMOS QUE ENVIAR O ID DAS POSTAGENS JUNTO PORQUE O MÉTODO EDIT E APAGAR ACIMA PRECISAM DELAS PARA ACHAR O POST

//FUNÇÃO LISTAR POSTS USER


module.exports = { createPost, editPost, deletePost, listPosts,  };