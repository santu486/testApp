const express = require("express");
const bodyParser = require("body-parser");
const caseRouter = require("./router/caseRouter");

const app = express();

app.use(bodyParser.json());
app.use("/cases", caseRouter);

app.get("/", (request, response) => {
  response.send("service is working ");
});

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.listen(3002, () => {
  console.log("application is listening at ...3001");
});
