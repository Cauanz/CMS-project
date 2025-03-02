const bcrypt = require("bcrypt");
const User = require("../models/userModel");

//* FUNÇÕES RELACIONADAS AO USUARIO

// FUNÇÃO CADASTRAR USER
const registerUser = async (req, res) => {

  const {name, email, password} = req.body;

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    
    const existingUser = User.findOne({ where: { email } });

    //TALVEZ ISSO VIRE UM MIDDLEWARE SEPARADO PARA SER REUTILIZADO
    if(existingUser) {
      res.send({ message: "Usuario cadastrado com este email já existe!" });
    }

    //TODO A(S) TABELA(S) NÃO ESTÃO CRIADAS NO POSTGRESQL E ESTÁ DANDO ERRO AO TENTAR CRIAR O USER
    const newUser = await User.create({ name, email, password: hashedPassword });
    res.status(201).json("User criado com sucesso!");
  } catch (error) {
    res.status(500).json(error)
  }

}

//FUNÇÃO LOGAR/AUTENTICAR USER

//FUNÇÃO APAGAR USER

module.exports = { registerUser };