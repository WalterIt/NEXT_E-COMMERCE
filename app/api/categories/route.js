import Category from "@models/category";
import { connectToDB } from "@utils/database";

export const GET = async (request) => {
  try {
    await connectToDB();

    const categories = await Category.find({})
      .populate("parent")
      .sort({ createdAt: -1 });

    return new Response(JSON.stringify(categories), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all categories!", { status: 500 });
  }
};
