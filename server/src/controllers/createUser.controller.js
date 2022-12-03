import createUserService from "../services/users/createUser.service";

const createUserController = async (req, res) => {
  const { name, email, telefone, data_de_registro } = req.body;

  const user = await createUserService(name, email, telefone, data_de_registro);
  const { ...rest } = user;

  return res.status(201).send(rest);
};

export default createUserController;
