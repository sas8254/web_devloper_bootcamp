const express = require("express");
const app = express();
const shelterRoutes = require("./routes/shelter");
const dogRoutes = require("./routes/dogs");

app.use("/shelters", shelterRoutes);
app.use("/dogs", dogRoutes);

app.listen(4000, () => {
  console.log("Serving on port 4000");
});
