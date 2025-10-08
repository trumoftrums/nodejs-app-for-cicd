const express = require("express");
const app = express();
const os = require('os');

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`🚀 Hello from Node.js app running on Kubernetes update time n! on pod: ${process.env.HOSTNAME || os.hostname()}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
