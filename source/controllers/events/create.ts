import { Request, Response } from 'express';
import { Context } from '../../bootstrap/response_context';
import { checkRequiredParams } from '../../helpers'
import { Event } from '../../models/Event';

export const createEvent = async (request: Request, response: Response) => {
	var context = new Context("");
	var { title, event_date } = request.body;

	const missing = checkRequiredParams(title, event_date);
	if (missing) {
		context.message = `Params Missing`;
		console.error(`Event Controller : createEvent => Params Missing`);
		return response.status(404).json(context);
	}

	// Create New Event
	var event = { title, event_date }

	try {
		var createdEvent = await Event.create(event);
		context.data = createdEvent
		context.message = "Event Cteated Succefully"
		context.success = true
		return response.status(201).json(context);
	} catch (error) {
		context.message = `Event Creation Failed`;
		console.error(`Event Controller : createEvent => ${error.message}`);
		return response.status(500).json(context);
	}
}
