const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
app.use(cookieParser('secretKey'));

app.get("/greet", (req, res) => {
  const { name = "no name" } = req.cookies;
  res.send(`Hi there ${name}`);
});

app.get("/setname", (req, res) => {
  res.cookie("name", "sammual colt");
  res.cookie("fish", "goldfish");
  res.send("sent you a cookie");
});

app.get('/getsignedcookie', (req, res)=>{
  res.cookie('fruit','apple',{signed:true});
  res.send('sent you our signed fruit cookie')
})

app.get('/verifyfruit', (req, res)=>{
  res.send(req.signedCookies)
})
app.listen(4000, () => {
  console.log("Serving on port 4000");
});
