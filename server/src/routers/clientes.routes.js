import { Router } from "express";

import createClienteController from "../controllers/clientes/createCliente.controller";
import listClienteController from "../controllers/clientes/listCliente.controller";
import deleteClienteController from "../controllers/clientes/deleteCliente.controller";
import updateClienteController from "../controllers/clientes/updateCliente.controller";

const router = Router();

router.post("", createClienteController);
router.get("", listClienteController);
router.delete("/:id", deleteClienteController);
router.patch("/:id", updateClienteController);

export default router;
