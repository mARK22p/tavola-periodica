const connect = require('connect')
const serveStatic = require('serve-static')

const port = 1234

connect().use(serveStatic(__dirname + '/public')).listen(port, () => {
    console.log(`Server running on ${port}...`)
})
