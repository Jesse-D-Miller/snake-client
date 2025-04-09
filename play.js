const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541//idk the port number
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", () => {
    console.log("you ded cuz you idled");
  });

  return conn;
};

console.log("Connecting ...");
connect();
