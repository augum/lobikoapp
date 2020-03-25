import Server from "./server";
var PORT= process.env.PORT || 780;
let server = new Server(PORT);
server.start();