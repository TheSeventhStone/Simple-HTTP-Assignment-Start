const fs = require("fs");
const responseHandler = require("./responses.js");

const image = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

const sendImage = (request, response) => responseHandler.serveFile(request,response,image,"image/png");

module.exports = {sendImage};