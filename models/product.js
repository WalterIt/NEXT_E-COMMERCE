import { Schema, model, models } from "mongoose";

const ProductSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Product Title is required!"],
    },
    images: [
      {
        type: String,
        required: [true, "Please enter your Product Images!"],
      },
    ],
    description: {
      type: String,
      required: [true, "Product Description is required!"],
    },
    price: {
      type: String,
      required: [true, "Product Price is required!"],
    },
  },
  { timestamps: true }
);

const Product = models.Product || model("Product", ProductSchema);

export default Product;
