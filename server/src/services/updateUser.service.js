import users from "../../database";
import * as bcrypt from "bcrypt";

const updateUserService = (id, name, email, password) => {
  const updateUser = {
    id,
    name,
    email,
    updatedOn: new Date(),
    password: password
      ? bcrypt.hashSync(password, 10)
      : users.find((element) => element.id === id).password,
  };

  const userIndex = users.findIndex((element) => element.id === id);
  if (userIndex === -1) {
    return { message: "User not found." };
  }

  users[userIndex] = { ...users[userIndex], ...updateUser };

  return users[userIndex];
};
export default updateUserService;