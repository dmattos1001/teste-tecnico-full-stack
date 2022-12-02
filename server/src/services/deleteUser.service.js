import users from "../../database";

const deleteUserService = (id) => {
  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex === -1) {
    return {
      message: "User not found.",
    };
  }
  users.splice(userIndex, 1);
  return {
    message: "User deleted with sucess",
  };
};

export default deleteUserService;
