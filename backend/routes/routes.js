const { registerUser, loginUser, deleteUser } = require("../controllers/user-controller");
const router = require("express").Router();


//* IMPORTAR FUNÇÕES DOS CONTROLLERS


//ROTA REGISTRO
router.post("/register", registerUser);

//ROTA AUTENTICAÇÃO/LOGIN
router.post("/login", loginUser);

//ROTA DELETAR USER
router.post("/deluser", deleteUser);

//ROTA CRIAR POST

//ROTA EDITAR POST

//ROTA APAGAR POST

//ROTA LISTAR POSTS

//ROTA LISTAR POSTS DO USER

module.exports = router;