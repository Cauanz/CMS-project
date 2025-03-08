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

    const newUser = await User.create({ name, email, password: hashedPassword });
    res.status(201).json("User criado com sucesso!");
  } catch (error) {
    res.status(500).json(error)
  }

}

//FUNÇÃO LOGAR/AUTENTICAR USER
const loginUser = async (req, res) => {

  const {email, password} = req.body;

  try {
  
    const user = await User.findOne({ where: { email } });

    if(!user) {
      res.status(404).json("User not found!");
      return;
    }

    const decryptedPassword = await bcrypt.compare(password, user.password)
      .then(() => {
        res.status(200).json("Authorized");
        //TODO MUDAR ISSO PARA MANDAR ALGO REALMENTE RELEVANTE, O ERROR TAMBÉM
      })
      .catch((err) => {
        console.log("ERROR", err);
      })

  } catch (error) {
    res.status(500).json("An error ocurred trying to login", error);
  }
}

//FUNÇÃO APAGAR USER
//* - AINDA PRECISO ENTENDER QUANDO ISSO SERÁ USADO
const deleteUser = async (req, res) => {

  const {email} = req.body;

  try {
  
    const user = await User.findOne({ where: { email } });

    if(!user) {
      res.status(404).json("User not found!");
      return;
    }

    User.destroy({ where: { email } });

    res.status(200).json("User deleted successfully!");
  } catch (error) {
    res.status(500).json("An error ocurred trying to remove the user", error);
  } 
}

module.exports = { registerUser, loginUser, deleteUser };