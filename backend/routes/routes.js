const { createPost, editPost, deletePost, listPosts, listPostsUser } = require("../controllers/post-controller");
const { registerUser, loginUser, deleteUser } = require("../controllers/user-controller");
const { validateToken } = require("../middlewares/middlewares");
const router = require("express").Router();


//* IMPORTAR FUNÇÕES DOS CONTROLLERS


//ROTA REGISTRO
router.post("/register/", registerUser);

//ROTA AUTENTICAÇÃO/LOGIN
router.post("/login/", loginUser);

//TODO - TALVEZ FAZER ROTA DE UPDATE USER

//ROTA DELETAR USER
router.post("/deluser/", deleteUser);

//ROTA CRIAR POST
router.post("/posts/", validateToken, createPost);

//ROTA EDITAR POST
router.put("/posts/:id", validateToken, editPost);

//ROTA APAGAR POST
router.delete("/posts/:id", validateToken, deletePost);

//ROTA LISTAR POSTS
router.get("/posts/", validateToken, listPosts);

//ROTA LISTAR POSTS DO USER
router.get("/userposts/", validateToken, listPostsUser);

module.exports = router;