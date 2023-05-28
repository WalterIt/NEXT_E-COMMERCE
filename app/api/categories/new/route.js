// import clientPromise from "@lib/mongodb";
import Category from "@models/category";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
  const { name, parentCategory } = await request.json();

  try {
    await connectToDB();
    const newCategory = new Category({ name, parent: parentCategory });

    await newCategory.save();
    return new Response(JSON.stringify(newCategory), {
      status: 201,
    });
  } catch (error) {
    return new Response("Failed to create a new category!", { status: 500 });
  }
};
