import users from "../../database";
import jwt from "jsonwebtoken";
import * as bcrypt from "bcryptjs";

const userLoginService = (email, password) => {
  const user = users.find((user) => user.email === email);
  if (!user) {
    return { message: "Invalid Email or password!" };
  }

  const passwordMatch = bcrypt.compareSync(password, user.password);

  if (!passwordMatch) {
    return { message: "Invalid Email or password!" };
  }

  const token = jwt.sign({ email: user.email }, "SECRET_KEY", {
    expiresIn: "24h",
  });

  const chave = { token: token };

  return chave;
};

export default userLoginService;
