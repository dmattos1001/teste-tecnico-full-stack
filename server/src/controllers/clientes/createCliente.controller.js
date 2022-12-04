import createClienteService from "../../services/clientes/createCliente.service";

const createClienteController = async (request, response) => {
  const data = request.body;

  try {
    const cliente = await createClienteService(data);

    return response.status(201).json({ message: "Cliente created", product });
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
};

export default createClienteController;
