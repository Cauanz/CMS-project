const bcrypt = require("bcrypt");

//* FUNÇÕES RELACIONADAS AO USUARIO

// FUNÇÃO CADASTRAR USER
const registerUser = async (req, res) => {

  const {name, email, password} = req.body;

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    
    //TODO PAREI CRIANDO ISSO

  } catch (error) {
    res.status(500).json(error)
  }

}

//FUNÇÃO LOGAR/AUTENTICAR USER

//FUNÇÃO APAGAR USER

