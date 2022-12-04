import createContatoService from "../../services/contatos/createContato.service";

const createContatoController = async (request, response) => {
  const data = request.body;

  try {
    const contato = await createContatoService(data);

    return response.status(201).json({ message: "Contato created", product });
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
};

export default createContatoController;
