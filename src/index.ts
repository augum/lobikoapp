import Server from "./server";
var PORT= process.env.PORT || 5000;
let server = new Server(PORT);
server.start();