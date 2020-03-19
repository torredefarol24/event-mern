"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_1 = require("./create");
const edit_1 = require("./edit");
const delete_1 = require("./delete");
const get_1 = require("./get");
exports.EventController = {
    create: create_1.createEvent,
    edit: edit_1.editEvent,
    delete: delete_1.deleteEvent,
    get: get_1.getEvents
};
