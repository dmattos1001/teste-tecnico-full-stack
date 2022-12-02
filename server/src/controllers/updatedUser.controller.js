import updateUserService from "../services/users/updateUser.service";

const updateUserController = (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;

  const updatedUser = updateUserService(id, name, email, password);

  const { password: hashedPassword, ...rest } = updatedUser;

  return res.json(rest);
};

export default updateUserController;
