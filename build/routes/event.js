"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const events_1 = require("../controllers/events");
exports.eventRouter = express_1.Router();
exports.eventRouter.get("/", events_1.EventController.get);
exports.eventRouter.post("/", events_1.EventController.create);
exports.eventRouter.patch("/", events_1.EventController.edit);
exports.eventRouter.delete("/", events_1.EventController.delete);
