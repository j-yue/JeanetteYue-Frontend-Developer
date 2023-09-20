const express = require("express");
const app = express();
require("dotenv").config();
const axios = require("axios");
const cors = require("cors");

const ENDPT = "https://api.spacexdata.com/v3/capsules";
const CLIENT = "https://spacex-capsule-test.netlify.app/";

const corsOptions = { origin: CLIENT };
app.use(cors(corsOptions));

const checkOrigin = (req) => {
  return req.headers.origin == corsOptions.origin;
};

app.get("/apiStatus", (req, res) => {
  if (checkOrigin(req)) res.send("you are authorized");
  else res.send("Unauthorized");
});

// get all capsules unmodified
app.get("/", (req, res) => {
  if (checkOrigin(req)) {
    axios
      .get(ENDPT)
      .then((response) => {
        res.send(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  } else res.send("You are not authorized to use this api");
});

// get capsules with filters
app.get("/:filters", (req, res) => {
  if (checkOrigin(req)) {
    const params = req.params.filters;
    axios
      .get(`${ENDPT}?${params}`)
      .then((response) => {
        res.send(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  } else res.send("You are not authorized to use this api");
});

const port = 8080;

app.listen(port, () => {
  console.log("Express server listening on port", port);
});
