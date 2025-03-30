const { createPost, editPost, deletePost, listPosts } = require("../controllers/post-controller");
const { registerUser, loginUser, deleteUser } = require("../controllers/user-controller");
const { validateToken } = require("../middlewares/middlewares");
const router = require("express").Router();


//* IMPORTAR FUNÇÕES DOS CONTROLLERS


//ROTA REGISTRO
router.post("/register", registerUser);

//ROTA AUTENTICAÇÃO/LOGIN
router.post("/login", loginUser);

//ROTA DELETAR USER
router.post("/deluser", deleteUser);

//ROTA CRIAR POST
router.post("/post", validateToken, createPost);

//ROTA EDITAR POST
router.put("/edit-post", validateToken, editPost);

//ROTA APAGAR POST
router.delete("/delete-post", validateToken, deletePost);

//ROTA LISTAR POSTS
router.get("/get-posts", validateToken, listPosts);

//ROTA LISTAR POSTS DO USER

module.exports = router;