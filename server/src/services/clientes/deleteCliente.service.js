import database from "../../database";

const deleteClienteService = async (id) => {
  try {
    const res = await database.query("DELETE FROM clientes WHERE id = $1", [
      id,
    ]);

    if (!res.rowCount) {
      throw new Error("Cliente not found");
    }
  } catch (error) {
    throw new Error(error);
  }
};

export default deleteClienteService;
