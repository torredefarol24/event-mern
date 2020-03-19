"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const response_context_1 = require("../../bootstrap/response_context");
const helpers_1 = require("../../helpers");
const Event_1 = require("../../models/Event");
exports.createEvent = (request, response) => __awaiter(this, void 0, void 0, function* () {
    var context = new response_context_1.Context("");
    var { title, event_date } = request.body;
    const missing = helpers_1.checkRequiredParams(title, event_date);
    if (missing) {
        context.message = `Params Missing`;
        console.error(`Event Controller : createEvent => Params Missing`);
        return response.status(404).json(context);
    }
    // Create New Event
    var event = { title, event_date };
    try {
        var createdEvent = yield Event_1.Event.create(event);
        context.data = createdEvent;
        context.message = "Event Cteated Succefully";
        context.success = true;
        return response.status(201).json(context);
    }
    catch (error) {
        context.message = `Event Creation Failed`;
        console.error(`Event Controller : createEvent => ${error.message}`);
        return response.status(500).json(context);
    }
});
