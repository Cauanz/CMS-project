const { registerUser } = require("../controllers/user-controller");
const router = require("express").Router();


//* IMPORTAR FUNÇÕES DOS CONTROLLERS


//ROTA REGISTRO
router.post("/register", registerUser);

//ROTA AUTENTICAÇÃO/LOGIN

//ROTA CRIAR POST

//ROTA EDITAR POST

//ROTA APAGAR POST

//ROTA LISTAR POSTS

//ROTA LISTAR POSTS DO USER

module.exports = router;