const express = require("express");
const app = express();
const User = require("./models/user");
const bcrypt = require("bcrypt");
const session = require('express-session');


const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/authDemo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("mongo connection Open!!!");
  })
  .catch((err) => {
    console.log("mongo error");
    console.log(err);
  });

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded({ extended: true }));
app.use(session({secret:'secret', resave:false, saveUninitialized: true}))

app.get("/", async (req, res) => {
  res.send("This is home page");
});

app.get("/register", async (req, res) => {
  res.render("register");
});

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const hash = await bcrypt.hash(password, 12);
  const user = new User({
    username,
    password: hash,
  });
  await user.save();
  req.session.user_id = user._id;
  res.redirect("/secret");
});

app.get('/login', (req, res)=>{
  res.render('login')
})

app.post('/login',async (req, res)=>{
  const {username, password} = req.body;
  const user = await User.findOne({username});
  const validPassword = await bcrypt.compare(password, user.password);
  if (validPassword){
    req.session.user_id = user._id;
    res.redirect("/secret");
  }else{
    res.redirect("/login");
  }

})

app.get("/secret", (req, res) => {
  if(!req.session.user_id){
    res.redirect('/login');
  }
  res.send("This is Secret");
});

app.listen(3000, () => {
  console.log("Serving on port 3000");
});
