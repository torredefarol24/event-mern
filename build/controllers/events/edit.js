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
exports.editEvent = (request, response) => __awaiter(this, void 0, void 0, function* () {
    var context = new response_context_1.Context("");
    var { event_id, title, event_date } = request.body;
    const missing = helpers_1.checkRequiredParams(event_id, title, event_date);
    if (missing) {
        context.message = `Params Missing`;
        console.error(`Event Controller : editEvent => Params Missing`);
        return response.status(404).json(context);
    }
    var findBy = {
        _id: event_id
    };
    var updateInfo = {
        title,
        event_date
    };
    try {
        var updatedEvent = yield Event_1.Event.findOneAndUpdate(findBy, updateInfo);
        updatedEvent.title = updateInfo.title;
        updatedEvent.event_date = updateInfo.event_date;
        context.data = updatedEvent;
        context.message = "Event Updated Successfully";
        context.success = true;
        return response.status(200).json(context);
    }
    catch (error) {
        context.message = `Event Update Failed`;
        console.error(`Event Controller : editEvent => ${error.message}`);
        return response.status(500).json(context);
    }
});
