const http = require("http");
// const htmlHandler = require("./htmlResponses.js");
// const textHandler = require("./textResponses.js");
// const jsonHandler = require("./jsonResponses.js");  
const responsesHandler = require("./responses.js");

const port = process.env.PORT || process.env.NODE_PORT || 3000;


const onRequest = (request, response) => {
    console.log(request.url);
    switch(request.url){
        case "/client2":
            responsesHandler.getClient2(request,response);
            break;
        case "/message":
            responsesHandler.getMessage(request,response);
            break;
        case "/styles.css":
            responsesHandler.getCSS(request,response);
            break;
        default:
            responsesHandler.getIndex(request,response);
    }
}

http.createServer(onRequest).listen(port, () => {
    console.log(`Listening on 127.0.0.1:${port}`);
});