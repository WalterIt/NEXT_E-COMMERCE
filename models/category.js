import { Schema, model, models } from "mongoose";

const CategorySchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Category Name is required!"],
    },
    parent: {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
  },
  { timestamps: true }
);

const Category = models.Category || model("Category", CategorySchema);

export default Category;
