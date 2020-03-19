import { model, Document } from 'mongoose';
import { eventSchema } from '../schema/event';

export const Event = model("Event", eventSchema);