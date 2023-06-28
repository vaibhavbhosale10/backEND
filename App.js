const cardData = [
  {
    name: "Mixmax",
    budget_name: "Software subscription",
    owner_id: 1,
    spent: {
      value: 100,
      currency: "SGD",
    },
    available_to_spend: {
      value: 1000,
      currency: "SGD",
    },
    card_type: "burner",
    expiry: "9 feb",
    limit: 100,
    status: "active",
  },
  {
    name: "Quickbooks’",
    budget_name: "Software subscription",
    owner_id: 2,
    spent: {
      value: 50,
      currency: "SGD",
    },
    available_to_spend: {
      value: 250,
      currency: "SGD",
    },
    card_type: "subscription",
    limit: 10,
    status: "active",
  },
  {
    name: "LinkdIn",
    budget_name: "Software subscription",
    owner_id: 3,
    spent: {
      value: 60,
      currency: "SGD",
    },
    available_to_spend: {
      value: 260,
      currency: "SGD",
    },
    card_type: "burner",
    limit: 10,
    status: "active",
  },
  {
    name: "Quikrr",
    budget_name: "Software subscription",
    owner_id: 4,
    spent: {
      value: 65,
      currency: "SGD",
    },
    available_to_spend: {
      value: 255,
      currency: "SGD",
    },
    card_type: "subscription",
    limit: 25,
    status: "active",
  },
  {
    name: "netflic",
    budget_name: "Software subscription",
    owner_id: 5,
    spent: {
      value: 70,
      currency: "SGD",
    },
    available_to_spend: {
      value: 270,
      currency: "SGD",
    },
    card_type: "subscription",
    limit: 15,
    status: "active",
  },
  {
    name: "Jio",
    budget_name: "Software subscription",
    owner_id: 6,
    spent: {
      value: 75,
      currency: "SGD",
    },
    available_to_spend: {
      value: 275,
      currency: "SGD",
    },
    card_type: "burner",
    limit: 30,
    status: "active",
  },
  {
    name: "HBO",
    budget_name: "Software subscription",
    owner_id: 7,
    spent: {
      value: 80,
      currency: "SGD",
    },
    available_to_spend: {
      value: 290,
      currency: "SGD",
    },
    card_type: "burner",
    limit: 30,
    status: "active",
  },
  {
    name: "Flipkart",
    budget_name: "Software subscription",
    owner_id: 8,
    spent: {
      value: 80,
      currency: "SGD",
    },
    available_to_spend: {
      value: 280,
      currency: "SGD",
    },
    card_type: "subscription",
    limit: 35,
    status: "active",
  },
  {
    name: "Facebook",
    budget_name: "Software subscription",
    owner_id: 9,
    spent: {
      value: 95,
      currency: "SGD",
    },
    available_to_spend: {
      value: 360,
      currency: "SGD",
    },
    card_type: "burner",
    limit: 10,
    status: "active",
  },
  {
    name: "Crixbuzz",
    budget_name: "Software subscription",
    owner_id: 10,
    spent: {
      value: 50,
      currency: "SGD",
    },
    available_to_spend: {
      value: 250,
      currency: "SGD",
    },
    card_type: "subscription",
    limit: 10,
    status: "active",
  },
  {
    name: "Expo",
    budget_name: "Software subscription",
    owner_id: 11,
    spent: {
      value: 66,
      currency: "SGD",
    },
    available_to_spend: {
      value: 390,
      currency: "SGD",
    },
    card_type: "burner",
    limit: 10,
    status: "active",
  },
  {
    name: "Bumble",
    budget_name: "Software subscription",
    owner_id: 12,
    spent: {
      value: 150,
      currency: "SGD",
    },
    available_to_spend: {
      value: 260,
      currency: "SGD",
    },
    card_type: "subscription",
    limit: 10,
    status: "active",
  },
  {
    name: "Instagram",
    budget_name: "Software subscription",
    owner_id: 13,
    spent: {
      value: 50,
      currency: "SGD",
    },
    available_to_spend: {
      value: 250,
      currency: "SGD",
    },
    card_type: "subscription",
    limit: 10,
    status: "active",
  },
  {
    name: "Twitter",
    budget_name: "Software subscription",
    owner_id: 14,
    spent: {
      value: 50,
      currency: "SGD",
    },
    available_to_spend: {
      value: 250,
      currency: "SGD",
    },
    card_type: "burner",
    limit: 10,
    status: "active",
  },
];

const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const port = 1010;
app.use(bodyparser.json());
const cors = require("cors");
app.use(cors());
const corsOptions = {
  origin: "http://localhost:3000",
};
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("welcome to volopaycards");
});

// get all cards for a user
app.get("/api/cards", (req, res) => {
  res.status(200).send(cardData);
});

//
app.post("/cards", (req, res) => {
  cardData.push(req.body);
  res.status(200).send("created");
});

app.listen(port, () => {
  console.log("server is listening on port 1010");
});
