import database from "../../database";

const updateClienteService = async ({
  nome,
  email,
  telefone,
  data_de_registro,
}) => {
  try {
    const res = await database.query(
      "UPDATE clientes SET nome = $2, email = $3, telefone = $4, data_de_registro = $5, WHERE id = $1 RETURNING *",
      [nome, email, telefone, data_de_registro]
    );

    return res.rows[0];
  } catch (err) {
    throw new Error(err);
  }
};

export default updateClienteService;
