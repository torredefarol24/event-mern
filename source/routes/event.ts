import { Router } from "express";
import { EventController } from '../controllers/events';

export const eventRouter: Router = Router();

eventRouter.get("/", EventController.get)
eventRouter.post("/", EventController.create);
eventRouter.patch("/", EventController.edit);
eventRouter.delete("/", EventController.delete);