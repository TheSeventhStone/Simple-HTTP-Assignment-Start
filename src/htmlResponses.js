const fs = require("fs");
const responseHandler = require("./responses.js");

const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const client2 = fs.readFileSync(`${__dirname}/../client/client2.html`);

const getIndex = (request,response) => sendPage(request,response,index);

const getClient2 = (request,response) => sendPage(request,response,client2);

const sendPage = (request, response, page) => responseHandler.serveFile(request,response,page,"text/html");

module.exports = {getIndex,getClient2};