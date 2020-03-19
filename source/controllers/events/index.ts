import { createEvent } from './create';
import { editEvent } from './edit';
import { deleteEvent } from './delete';
import { getEvents } from './get';

export const EventController = {
	create: createEvent,
	edit: editEvent,
	delete: deleteEvent,
	get: getEvents
}