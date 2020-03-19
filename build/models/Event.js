"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const event_1 = require("../schema/event");
exports.Event = mongoose_1.model("Event", event_1.eventSchema);
