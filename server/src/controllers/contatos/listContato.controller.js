import listContatoService from "../../services/contatos/listContato.service";

const listContatoController = async (request, response) => {
  try {
    const contato = await listContatoService();

    return response.status(200).json(products);
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
};

export default listContatoController;
