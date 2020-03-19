import express from 'express';
import path from 'path';
import { routerSetup, bodyParserSetup } from '../bootstrap/app_setup';
import { DBConnection } from '../bootstrap/mongo';

const pathOps = {
	path: path.join(__dirname + "/../../", ".env")
}
require("dotenv").config(pathOps)


export class EventManagerApp {
	private app: express.Application;

	constructor() {
		this.app = express();
		this.setupBodyParser(this.app)
		this.setupRoutes(this.app)
		const mongoConnection = new DBConnection().connectToDB()
	}

	private setupBodyParser(app: express.Application) {
		bodyParserSetup(app)
	}

	private setupRoutes(app: express.Application) {
		routerSetup(app)
	}

	public startServer() {
		const listenPort = process.env.APP_PORT
		const listenCallback = () => {
			console.log(`====================================`)
			console.log(`Event Manager Api started on: \n${new Date()}`)
			console.log(`====================================`)
		}

		this.app.listen(listenPort, listenCallback)
	}

}