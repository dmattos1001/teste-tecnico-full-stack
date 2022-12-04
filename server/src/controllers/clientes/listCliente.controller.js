import listClienteService from "../../services/clientes/listCliente.service";

const listClienteController = async (request, response) => {
  try {
    const cliente = await listClienteService();

    return response.status(200).json(products);
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
};

export default listClienteController;
