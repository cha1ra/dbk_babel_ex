const http = require('http')
const server = http.createServer()

server.on('request', function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.write('Ex Res')
  res.end()
})

const portNum = 3456
server.listen(portNum)
console.log(`http://localhost:${portNum}`)
