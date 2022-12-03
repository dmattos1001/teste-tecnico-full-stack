import users from "../../database/index.js";
import { v4 as uuidv4 } from "uuid";

const createUserService = async (name, email, telefone, data_de_registro) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = {
    id: uuidv4(),
    name,
    email,
    telefone,
    data_de_registro: new Date(),
  };

  users.push(newUser);

  return newUser;
};

export default createUserService;
