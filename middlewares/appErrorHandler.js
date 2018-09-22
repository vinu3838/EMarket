const response = require('../libs/responseLibs')
const logger = require('../libs/loggerLib')


let errorHandler = (err,req, res, next) => {
   // console.log("application error handler called");
    logger.error(err,'Application Level',8)
    let apiResponse = response.generate(true, 'Some error occured at global level',500, null)
    res.send(apiResponse)
    
}
let notFoundHandler = (req,res,next)=>{

    logger.error('Not Found','MiddleWare Not Found Handler',9)
    let apiResponse = response.generate(true, 'Route not found in the application',404, null)
    res.status(404).send(apiResponse)

}

module.exports = {
    globalErrorHandler : errorHandler,
    globalNotFoundHandler : notFoundHandler
}
