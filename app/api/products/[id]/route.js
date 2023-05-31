import Product from "@models/product";
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const product = await Product.findById(params.id);
    if (!product) return new Response("Product Not Found!", { status: 404 });

    return new Response(JSON.stringify(product), { status: 200 });
  } catch (error) {
    return new Response("Internal Server Error!", { status: 500 });
  }
};

export const PATCH = async (request, { params }) => {
  const { title, category, description, price, images, properties } =
    await request.json();

  try {
    await connectToDB();

    // Find the existing product by ID
    const existingProduct = await Product.findById(params.id);

    if (!existingProduct) {
      return new Response("Product not found!", { status: 404 });
    }

    // Update the product with new data
    existingProduct.title = title;
    existingProduct.category = category;
    existingProduct.description = description;
    existingProduct.price = price;
    existingProduct.images = images;
    existingProduct.properties = properties;

    await existingProduct.save();

    return new Response("Successfully updated the Product!", { status: 200 });
  } catch (error) {
    return new Response("Error Updating Product!", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  try {
    await connectToDB();

    // Find the product by ID and remove it
    await Product.findByIdAndRemove(params.id);

    return new Response("Product deleted successfully!", { status: 200 });
  } catch (error) {
    return new Response("Error deleting Product!", { status: 500 });
  }
};
