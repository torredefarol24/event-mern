import * as bodyParser from 'body-parser';
import { eventRouter } from '../routes/event';

export const bodyParserSetup = (app: any) => {
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }))
}

export const routerSetup = (app: any) => {
	app.use("/api/v1/events", eventRouter)
}