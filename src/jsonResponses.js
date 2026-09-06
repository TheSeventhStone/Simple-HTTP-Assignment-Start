const textHandler  = require("./textResponses.js");
const responseHandler = require("./responses.js");

const getHelloJSON = (request,response) => {
    const helloJSON = {
        message: textHandler.hello,
    };
    const stringMessage = JSON.stringify(helloJSON);

    responseHandler.serveFile(request,response,stringMessage,"application/json");
};

const getTimeJSON = (request,response) => {
    const timeJSON = {
        time: textHandler.getTimeString(),
    };
    const stringMessage = JSON.stringify(timeJSON);

    responseHandler.serveFile(request,response,stringMessage,"application/json");
};

module.exports = {getHelloJSON,getTimeJSON};