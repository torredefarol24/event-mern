import { Request, Response } from 'express';
import { Context } from '../../bootstrap/response_context';
import { checkRequiredParams } from '../../helpers'
import { Event } from '../../models/Event';

export const deleteEvent = async (request: Request, response: Response) => {
	var context = new Context("");
	var { event_id } = request.body;

	const missing = checkRequiredParams(event_id);
	if (missing) {
		context.message = `Params Missing`;
		console.error(`Event Controller : deleteEvent => Params Missing`);
		return response.status(404).json(context);
	}

	var findBy = {
		_id: event_id
	}

	try {
		var deletedEvent = await Event.findByIdAndDelete(findBy);
		context.data = deletedEvent
		context.message = "Event Deleted Successfully"
		context.success = true
		return response.status(200).json(context);
	} catch (error) {
		context.message = `Event Delete Failed`;
		console.error(`Event Controller : deleteEvent => ${error.message}`);
		return response.status(500).json(context);
	}
}
