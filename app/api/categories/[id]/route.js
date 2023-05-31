import Category from "@models/category";
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const category = await Category.findById(params.id);
    if (!category) return new Response("Category Not Found!", { status: 404 });

    return new Response(JSON.stringify(category), { status: 200 });
  } catch (error) {
    return new Response("Internal Server Error!", { status: 500 });
  }
};

export const PATCH = async (request, { params }) => {
  const { name, parent, properties } = await request.json();

  try {
    await connectToDB();

    // Find the existing category by ID
    const existingCategory = await Category.findById(params.id);

    if (!existingCategory) {
      return new Response("Category not found!", { status: 404 });
    }

    // Update the category with new data
    existingCategory.name = name;
    existingCategory.parent = parent;
    existingCategory.properties = properties;

    await existingCategory.save();

    return new Response("Successfully updated the Category!", { status: 200 });
  } catch (error) {
    return new Response("Error Updating Category!", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  try {
    await connectToDB();

    // Find the category by ID and remove it
    await Category.findByIdAndRemove(params.id);

    return new Response("Category deleted successfully!", { status: 200 });
  } catch (error) {
    return new Response("Error deleting Category!", { status: 500 });
  }
};
