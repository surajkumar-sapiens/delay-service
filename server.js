const express = require("express");
const cors = require("cors");

const server = express();

server.use(cors());

const PORT = process.env.PORT || 3003;

const sleep = async (duration = 1000) =>
  new Promise((resolve) => setTimeout(resolve, duration));

server.get("/sleep", async (req, res) => {
  try {
    await sleep(req.query.delay);
    res.send({});
  } catch (e) {
    console.error(e);
    res.send({});
  }
});

server.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
