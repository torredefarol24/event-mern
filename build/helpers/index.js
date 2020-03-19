"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkRequiredParams = (...reqParams) => {
    for (var param of reqParams) {
        if (typeof param == "undefined")
            return true;
    }
    return false;
};
