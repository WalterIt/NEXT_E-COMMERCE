// import clientPromise from "@lib/mongodb";
import Category from "@models/category";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
  const { name, parentCategory, properties } = await request.json();

  try {
    await connectToDB();
    const newCategory = new Category({
      name,
      parent: parentCategory,
      properties,
    });

    await newCategory.save();
    return new Response(JSON.stringify(newCategory), {
      status: 201,
    });
  } catch (error) {
    console.log(error);
    return new Response("Failed to create a new category!", { status: 500 });
  }
};
