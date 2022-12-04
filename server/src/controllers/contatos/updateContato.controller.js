import updateContatoService from "../../services/contatos/updateContato.service";

const updateContatoController = async (request, response) => {
  const data = request.body;
  const { id } = request.params;

  try {
    const contatoUpdate = await updateContatoService(id, data);

    return response
      .status(200)
      .json({ message: "Contato updated", ClienteUpdate });
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
};

export default updateContatoController;
