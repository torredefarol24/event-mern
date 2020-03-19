import { Schema } from 'mongoose';

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


export const eventSchema = new Schema(eventSchemaOpts, collectionOpts);