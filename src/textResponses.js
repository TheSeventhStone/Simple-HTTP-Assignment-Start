const responseHandler = require("./responses.js");
const hello = "Hello World!";

const getTimeString = () => {
    const d = new Date();
    const dateString = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
    return dateString;
};

const getMessage = (request, response) => responseHandler.serveFile(request,response,hello, "text/plain");
const getTime = (request, response) => responseHandler.serveFile(request,response,getTimeString(), "text/plain");

module.exports = {hello,getTime,getTimeString,getMessage};