const express = require('express')
const TeachableMachine = require("@sashido/teachablemachine-node");

const app = express()

const model = new TeachableMachine({
  modelUrl: "https://teachablemachine.withgoogle.com/models/bbvEyjZ94/"
});


app.get("/image/classify", async (req, res) => {
  const  url  = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fthesadsa.co.uk%2F&psig=AOvVaw1AGZlSU6MH-8s-4_WzE1-r&ust=1621809291804000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJiGrtOs3vACFQAAAAAdAAAAABAD"

  return model.classify({
    imageUrl: url,
  }).then((predictions) => {
    console.log(predictions);
    return res.json(predictions);
  }).catch((e) => {
    console.error(e);
    res.status(500).send("Something went wrong!")
  });
});

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

app.use("/api/auth", require('./routes/authRoutes'))

app.get('/', function (req, res) {
  console.log("sdf")
})

app.listen( 5000, () => {
    console.log("listen")
})