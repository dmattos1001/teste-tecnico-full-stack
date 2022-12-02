import deleteUserService from "../services/users/deleteUser.service";

const deleteUserController = (req, res) => {
  const { id } = req.params;
  const deletedUser = deleteUserService(id);

  return res.json(deletedUser);
};

export default deleteUserController;
