/**
 * Created by gcaudill on 1/9/2017.
 */
var http=require('http');
var url=require('url');

http.createServer(function (request,response) {
    if(url.parse(request.url).pathname == '/wait') {
        var startTime = new Date().getTime();
        while (new Date().getTime() < startTime + 5000);
        response.write('Thanks for waiting!\n');
    }
        else {
        response.write('Hello!');
    }

    response.end();
}).listen(8080);

console.log('Server started');