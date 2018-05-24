const grpc = require('grpc')

const server = new grpc.Server();
server.bind('0.0.0.0:28492', grpc.ServerCredentials.createInsecure())
server.start()
