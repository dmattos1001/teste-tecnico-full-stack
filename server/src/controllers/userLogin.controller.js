import userLoginService from "../services/userLogin.service";

const userLoginController = (req, res) => {
  const { email, password } = req.body;

  const userLogin = userLoginService(email, password);

  if (userLogin?.message) {
    return res.status(401).send(userLogin);
  }

  return res.json(userLogin);
};

export default userLoginController;
