import database from "../../database";

const listContatoService = async () => {
  try {
    const res = await database.query("SELECT * FROM contatos");
    return res.rows;
  } catch (error) {
    throw new Error(error);
  }
};

export default listContatoService;
