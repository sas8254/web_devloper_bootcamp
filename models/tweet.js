const mongoose = require("mongoose");
const { Schema } = mongoose;
mongoose
  .connect("mongodb://localhost:27017/relationshipDemo1")
  .then(() => {
    console.log("mongo connection open");
  })
  .catch((e) => {
    console.log("mongo connection error", e);
  });

const userSchema = new Schema({
  name: String,
  age: Number,
});

const tweetSchema = new Schema({
  text: String,
  likes: Number,
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

const User = mongoose.model("User", userSchema);
const Tweet = mongoose.model("Tweet", tweetSchema);

// const makeTweets = async () => {
//   //   const user = new User({ name: "chickenfan99", age: 61 });
//   const user = await User.findOne({ name: "chickenfan99" });
//   //   const tweet1 = new Tweet({ text: "Omg!, I love my chickens", likes: 0 });
//   const tweet2 = new Tweet({ text: "chi chi chi", likes: 10 });
//   //   user.save();
//   tweet2.user = user;
//   tweet2.save();
// };
// makeTweets();

const findTweet = async () => {
  const t = await Tweet.findOne({}).populate("user", "name");
  console.log(t);
};
findTweet();
