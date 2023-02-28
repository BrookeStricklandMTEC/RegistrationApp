// const { __PRIVATE__ } = require('styled-components')
// const winston = require('winston')

// const { combine, timestamp, json } = winston.format

// const logger = winston.createLogger({

// level: process.env.LOG_LEVEL || 'info',
// format: combine(timestamp({
//     format: 'YYYY-MM-DD hh:mm:ss.SSS A'
// }), json()),
// transports: [
//     new winston.transports.Console(),
//     new winston.transports.File({
//         filename: `/../logs/server.log`
//     })
// ]

// })

// module.exports = logger

// change every console in server to logger.log