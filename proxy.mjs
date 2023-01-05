import http from 'http'
import httpProxy from 'http-proxy'

const proxy = httpProxy.createProxyServer()
proxy.on('error', function (err, req, res) {
  res.writeHead(500, { 'Content-Type': 'text/plain' })
  res.end('500 Internal Server Error')
})

const server = http.createServer(function (req, res) {
  let target;

  if (req.url.startsWith('/api/')) {
    target = 'http://localhost:5000';
  } else if (req.url.replace(/\/$/, '') === '/getLanguage') {
    target = 'http://localhost:10500';
  } else {
    target = 'http://localhost:3000';
  }

  proxy.web(req, res, { target })
})
server.listen(1234)
console.log('Proxy on http://localhost:1234')
