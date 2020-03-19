"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const path_1 = __importDefault(require("path"));
const pathOps = {
    path: path_1.default.join(__dirname + "/../../", ".env")
};
require("dotenv").config(pathOps);
class DBConnection {
    constructor() {
        this.connectCB = () => console.log(`Mongo Connection OK`);
        this.errorCB = (err) => console.error(`Mongo Connection Error : ${err}`);
        this.connectToDB = () => {
            this.mongoose.connect(this.DB_URL, this.connectionOpts)
                .then(this.connectCB)
                .catch((err) => this.errorCB(err));
        };
        this.DB_URL = `${process.env.DB_CON_STR}`;
        this.connectionOpts = {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        };
        this.mongoose = mongoose_1.default;
    }
}
exports.DBConnection = DBConnection;
