import database from "../../database";

const updateContatoService = async ({ nome, email, telefone, clientes_id }) => {
  try {
    const res = await database.query(
      "UPDATE contatos SET nome = $2, email = $3, telefone = $4, clientes_id = $5, WHERE id = $1 RETURNING *",
      [nome, email, telefone, clientes_id]
    );

    return res.rows[0];
  } catch (err) {
    throw new Error(err);
  }
};

export default updateContatoService;
