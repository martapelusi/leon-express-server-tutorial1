const { response } = require("express");
const express = require("express");
const app = express();
const PORT = 8000;

const rappers = {
  "21 Savage": {
    age: 29,
    birthName: "Sheyaa Abraham-Joseph",
    birthLocation: "London, England",
  },
  "Chance the Rapper": {
    age: 29,
    birthName: "Chancelor Bennett",
    birthLocation: "Chicago, Illinois",
  },
  Dylan: {
    age: 29,
    birthName: "Dylan",
    birthLocation: "Dylan",
  },
};

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/myIndex.html");
});

// Pulling the rapperName off the url- grabbing the rapperName (the query parameter) from the URL
app.get("/api/:rapperName", (req, res) => {
  const rappersName = req.params.rapperName;

  if (rappers[rappersName]) {
    res.json(rappers[rappersName]);
  } else {
    res.json(rappers["Dylan"]);
    // // console.log(req.params.rapperName);
    // res.json(rappers);
  }
});

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}!`);
});
