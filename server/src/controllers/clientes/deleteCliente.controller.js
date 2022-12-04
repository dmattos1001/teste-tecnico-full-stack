import deleteClienteService from "../../services/clientes/deleteCliente.service";

const deleteClienteController = async (request, response) => {
  const { id } = request.params;

  try {
    const deleteCliente = await deleteClienteService(id);

    return response.status(204).json();
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
};

export default deleteClienteController;
