const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/relationshipDemo1")
  .then(() => {
    console.log("mongo connection open");
  })
  .catch((e) => {
    console.log("mongo connection error", e);
  });

const userSchema = new mongoose.Schema({
  first: String,
  last: String,
  addresses: [
    {
      _id: { id: false },
      street: String,
      city: String,
      state: String,
      country: String,
    },
  ],
});

const User = mongoose.model("User", userSchema);

const makeUser = async () => {
  const u = new User({
    first: "Harry",
    last: "Potter",
  });
  u.addresses.push({
    street: "22",
    city: "Bharuch",
    state: "Gujrat",
    country: "India",
  });

  const res = await u.save();
  console.log(res);
};

const addAddress = async (id) => {
  const user = await User.findById(id);
  user.addresses.push({
    street: "222",
    city: "Bharuch",
    state: "Gujrat",
    country: "India",
  });
  const res = await user.save();
  console.log(res);
};

// makeUser()

addAddress("6353c8ad3acaf561dabcd044");
