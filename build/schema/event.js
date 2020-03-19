"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const eventSchemaOpts = {
    title: {
        type: String,
        required: true,
    },
    event_date: {
        type: Date,
        required: true,
    }
};
const collectionOpts = {
    collection: "events",
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
};
exports.eventSchema = new mongoose_1.Schema(eventSchemaOpts, collectionOpts);
