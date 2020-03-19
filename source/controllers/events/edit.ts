import { Request, Response } from 'express';
import { Context } from '../../bootstrap/response_context';
import { checkRequiredParams } from '../../helpers'
import { Event } from '../../models/Event';

export const editEvent = async (request: Request, response: Response) => {
	var context = new Context("");
	var { event_id, title, event_date } = request.body;

	const missing = checkRequiredParams(event_id, title, event_date);
	if (missing) {
		context.message = `Params Missing`;
		console.error(`Event Controller : editEvent => Params Missing`);
		return response.status(404).json(context);
	}

	var findBy = {
		_id: event_id
	}

	var updateInfo = {
		title,
		event_date
	}

	try {
		var updatedEvent: any = await Event.findOneAndUpdate(findBy, updateInfo);
		updatedEvent.title = updateInfo.title;
		updatedEvent.event_date = updateInfo.event_date;

		context.data = updatedEvent
		context.message = "Event Updated Successfully"
		context.success = true
		return response.status(200).json(context);
	} catch (error) {
		context.message = `Event Update Failed`;
		console.error(`Event Controller : editEvent => ${error.message}`);
		return response.status(500).json(context);
	}
}
