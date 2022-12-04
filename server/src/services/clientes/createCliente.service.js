import database from "../../database";

const createClienteService = async ({
  nome,
  email,
  telefone,
  data_de_registro,
}) => {
  try {
    const res = await database.query(
      "INSERT INTO clientes (nome, email, telefone, data_de_registro) VALUES ($1, $2, $3) RETURNING *",
      [nome, email, telefone, data_de_registro]
    );
    return res.rows[0];
  } catch (error) {
    throw new Error(error);
  }
};

export default createClienteService;
