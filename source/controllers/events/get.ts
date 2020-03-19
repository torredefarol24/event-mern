import { Request, Response } from 'express';
import { Context } from '../../bootstrap/response_context';
import { Event } from '../../models/Event';

export const getEvents = async (request: Request, response: Response) => {
	var context = new Context("");

	var { event_date } = request.body;
	var findOpts = {
		event_date
	}

	try {
		var events = await Event.find(findOpts);
		context.data = events
		context.message = "Event Fetched Successfully"
		context.success = true
		return response.status(200).json(context);
	} catch (error) {
		context.message = `Event Creation Failed`;
		console.error(`Event Controller : getEvent => ${error.message}`);
		return response.status(500).json(context);
	}
}
