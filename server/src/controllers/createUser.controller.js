import createUserService from "../services/users/createUser.service";

const createUserController = async (req, res) => {
  const { name, email, password } = req.body;

  const user = await createUserService(name, email, password);
  const { password: hashedPassword, ...rest } = user;

  return res.status(201).send(rest);
};

export default createUserController;