import { Router } from "express";

import createUserController from "../controllers/createUser.controller";
import deleteUserController from "../controllers/deleteUser.controller";
import listUsersController from "../controllers/listUsers.controller";
import updateUserController from "../controllers/updateUser.controller";

import verifyTokenMiddleware from "../middlewares/verifyToken.middleware";
import verifyEmailAvailableMiddleware from "../middlewares/verifyEmailAvailable.middleware";

const router = Router();

router.post("", verifyEmailAvailableMiddleware, createUserController);

router.get("", listUsersController);

router.patch("/:id", verifyTokenMiddleware, updateUserController);

router.delete("/:id", verifyTokenMiddleware, deleteUserController);

export default router;
