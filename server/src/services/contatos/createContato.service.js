import database from "../../database";

const createContatoService = async ({ name, email, telefone, clientes_id }) => {
  try {
    const res = await database.query(
      "INSERT INTO contatos (name, email, telefone, clientes_id) VALUES ($1, $2, $3) RETURNING *",
      [name, email, telefone, clientes_id]
    );
    return res.rows[0];
  } catch (error) {
    throw new Error(error);
  }
};

export default createContatoService;
