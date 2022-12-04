import database from "../../database";

const listClienteService = async () => {
  try {
    const res = await database.query("SELECT * FROM clientes");
    return res.rows;
  } catch (error) {
    throw new Error(error);
  }
};

export default listClienteService;
