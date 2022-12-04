import updateClienteService from "../../services/clientes/updateCliente.service";

const updateClienteController = async (request, response) => {
  const data = request.body;
  const { id } = request.params;

  try {
    const ClienteUpdate = await updateClienteService(id, data);

    return response
      .status(200)
      .json({ message: "Cliente updated", ClienteUpdate });
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
};

export default updateClienteController;
