import database from "../../database";

const deleteContatoService = async (id) => {
  try {
    const res = await database.query("DELETE FROM contatos WHERE id = $1", [
      id,
    ]);

    if (!res.rowCount) {
      throw new Error("Contato not found");
    }
  } catch (error) {
    throw new Error(error);
  }
};

export default deleteContatoService;
