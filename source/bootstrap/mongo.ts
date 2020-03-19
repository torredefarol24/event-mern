import mongoose from 'mongoose';
import path from 'path';

const pathOps = {
	path: path.join(__dirname + "/../../", ".env")
}
require("dotenv").config(pathOps)


export class DBConnection {
	private DB_URL: string;
	private connectionOpts: any;
	private mongoose: any

	constructor() {
		this.DB_URL = `${process.env.DB_CON_STR}`;
		this.connectionOpts = {
			useCreateIndex: true,
			useNewUrlParser: true,
			useUnifiedTopology: true
		}
		this.mongoose = mongoose;
	}

	private connectCB = () => console.log(`Mongo Connection OK`);
	private errorCB = (err: any) => console.error(`Mongo Connection Error : ${err}`);

	public connectToDB = () => {
		this.mongoose.connect(this.DB_URL, this.connectionOpts)
			.then(this.connectCB)
			.catch((err: any) => this.errorCB(err));

	}
}
