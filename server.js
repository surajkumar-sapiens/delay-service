const express = require("express");
const cors = require("cors");
const mockSearchResponse = require("./mock-search-response.json");

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

server.get("/search", async (req, res) => {
  try {
    await sleep(1200);
    if (req.query.suggestion === "true") {
      res.send([
        mockSearchResponse.claims[0].claimNumber,
        mockSearchResponse.contacts[0].contactNumber,
        mockSearchResponse.contacts[0].contactName,
        mockSearchResponse.policies[0].policyNumber,
      ]);
    } else {
      res.send(mockSearchResponse);
    }
  } catch (e) {
    console.error(e);
    res.send({});
  }
});

server.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
