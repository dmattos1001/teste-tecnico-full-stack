import { Router } from "express";

import createContatoController from "../controllers/contatos/createContato.controller";
import listContatoController from "../controllers/contatos/listContato.controller";
import deleteContatoController from "../controllers/contatos/deleteContato.controller";
import updateContatoController from "../controllers/contatos/updateContato.controller";

const router = Router();
contatos;
router.post("", createContatoController);
router.get("", listContatoController);
router.delete("/:id", deleteContatoController);
router.patch("/:id", updateContatoController);

export default router;
