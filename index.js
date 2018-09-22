const express = require('express')
const fs = require('fs')
const mongoose= require('mongoose')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const globalErrorHandler= require('./middlewares/appErrorHandler')
const routeLoggerMiddleware = require('./middlewares/routeLogger')
const http = require('http');
const logger = require('./libs/loggerLib')
const app = express()
const appConfig= require('./config/appConfig')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(globalErrorHandler.globalErrorHandler)
app.use(routeLoggerMiddleware.logIp)
app.use(helmet());


let modelsPath = './models'
fs.readdirSync(modelsPath).forEach(function (file) {
    if (~file.indexOf('.js')) {
       // console.log(file)
        require(modelsPath + '/' + file)
    }
})




let routesPath = './routes'
fs.readdirSync(routesPath).forEach(function (file) {
    if (~file.indexOf('.js')) {
        let route = require(routesPath + '/' + file);
        route.setRouter(app);
    }
});



app.use(globalErrorHandler.globalNotFoundHandler)

const server = http.createServer(app)

console.log(appConfig)
server.listen(appConfig.port)
server.on('error', onError)
server.on('listening', onListening)


function onError(error) {
    if (error.syscall !== 'listen') {
        logger.error(error.code + ' not equal listen', 'serverOnErrorHandler', 10)
        throw error
    }

 
    switch (error.code) {
        case 'EACCES':
            logger.error(error.code + ':elavated privileges required', 'serverOnErrorHandler', 10)
            process.exit(1)
            break
        case 'EADDRINUSE':
            logger.error(error.code + ':port is already in use.', 'serverOnErrorHandler', 10)
            process.exit(1)
            break
        default:
            logger.error(error.code + ':some unknown error occured', 'serverOnErrorHandler', 10)
            throw error
    }
}



function onListening() {
    var addr = server.address()
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    ('Listening on ' + bind)
    logger.info('server listening on port' + addr.port, 'serverOnListeningHandler', 10)
    let db = mongoose.connect(appConfig.db.uri,{useNewUrlParser: true})
}

process.on('unhandledRejection', (reason, p) => {
    console.log('Unhandled Rejection at: Promise', p, 'reason:', reason)
})




mongoose.connection.on('open',function(err){
if(err)
{
    console.log(err)
}
else{
    console.log('db connection success')
}

})

mongoose.connection.on('error',function(err){
 
        console.log(err)
    
    
    })