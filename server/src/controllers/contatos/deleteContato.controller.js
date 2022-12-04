import deleteContatoService from "../../services/contatos/deleteContato.service";

const deleteContatoController = async (request, response) => {
  const { id } = request.params;

  try {
    const deleteContato = await deleteContatoService(id);

    return response.status(204).json();
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
};

export default deleteContatoController;
