const express = require("express");
const app = express();

// const drinks = require(./models/drinks)
const drinks = require("./models/drinks");
const food = require("./models/food");

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("Welcome to GitPub");
});

//INDEX ROUTE
app.get("/drinks", (req, res) => {
  res.render("drinks_index", { drinks });
});

app.get("/food", (req, res) => {
  res.render("food_index", { food });
});

//SHOW ROUTE
app.get("/drinks/:id", (req, res) => {
  let drink = drinks[req.params.id];
  res.render("drinks_show", { show: drink });
  console.log("console", drink);
});
app.get("/food/:id", (req, res) => {
  let eats = food[req.params.id];
  res.render("food_show", { show: eats });
  console.log("console food", eats);
});

app.get("/drinks", (req, res) => {
  res.send(drinks.params);
});
// app.get("/foods", (req, res) => {
//   res.send(food.params);
// });
//drink = drinks[i].name.charAt(0,1).toUpperCase() + drinks[i].name.slice(1)

// app.get("/food/:id", (req, res) => {
//   let food = foods("req.params.id");
//   res.render("food_show", { food });
// });

app.listen(3000, () => {
  console.log("ServiceStargate");
});
