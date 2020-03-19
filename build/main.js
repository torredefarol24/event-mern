"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app_setup_1 = require("./bootstrap/app_setup");
const pathOps = {
    path: path_1.default.join(__dirname + "/../../", ".env")
};
require("dotenv").config(pathOps);
class EventManagerApp {
    constructor() {
        this.app = express_1.default();
        this.setupBodyParser(this.app);
        this.setupRoutes(this.app);
    }
    setupBodyParser(app) {
        app_setup_1.bodyParserSetup(app);
    }
    setupRoutes(app) {
        app_setup_1.routerSetup(app);
    }
    startServer() {
        const listenPort = process.env.APP_PORT;
        const listenCallback = () => {
            console.log(`====================================`);
            console.log(`Event Manager Api started on: \n${new Date()}`);
            console.log(`====================================`);
        };
        this.app.listen(listenPort, listenCallback);
    }
}
exports.EventManagerApp = EventManagerApp;
