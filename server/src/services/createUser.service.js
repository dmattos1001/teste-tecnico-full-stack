import users from "../../database/index.js";
import { v4 as uuidv4 } from "uuid";
import * as bcrypt from "bcryptjs";

const createUserService = async (name, email, password, isAdm) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = {
    name,
    email,
    password: hashedPassword,
    createdOn: new Date(),
    updatedOn: new Date(),
    id: uuidv4(),
  };

  users.push(newUser);

  return newUser;
};

export default createUserService;
