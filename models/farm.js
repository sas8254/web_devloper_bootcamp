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

const productSchema = new Schema({
  name: String,
  price: Number,
  season: {
    type: String,
    enum: ["Spring", "Summer", "Fall", "Winter"],
  },
});

const farmSchema = new Schema({
  name: String,
  city: String,
  products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
});

const Product = mongoose.model("Product", productSchema);
const Farm = mongoose.model("Farm", farmSchema);

// Product.insertMany([
//   { name: "Goddess Melon", price: 1.99, season: "Summer" },
//   { name: "Suger Baby Watermelon", price: 0.99, season: "Summer" },
//   { name: "Asparagus", price: 3.99, season: "Spring" },
// ]);

const makeFarm = async () => {
  const farm = new Farm({ name: "Full Belly Farms", city: "Bharuch" });
  const melon = await Product.findOne({ name: "Goddess Melon" });
  farm.products.push(melon);
  await farm.save();
  console.log(farm);
};

// makeFarm();

const addProduct = async () => {
  const farm = await Farm.findOne({ name: "Full Belly Farms" });
  const Watermelon = await Product.findOne({ name: "Suger Baby Watermelon" });
  farm.products.push(Watermelon);
  await farm.save();
  console.log(farm);
};

addProduct();
