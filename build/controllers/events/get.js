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
const Event_1 = require("../../models/Event");
exports.getEvents = (request, response) => __awaiter(this, void 0, void 0, function* () {
    var context = new response_context_1.Context("");
    var { event_date } = request.body;
    var findOpts = {
        event_date
    };
    try {
        var events = yield Event_1.Event.find(findOpts);
        context.data = events;
        context.message = "Event Fetched Successfully";
        context.success = true;
        return response.status(200).json(context);
    }
    catch (error) {
        context.message = `Event Creation Failed`;
        console.error(`Event Controller : getEvent => ${error.message}`);
        return response.status(500).json(context);
    }
});
