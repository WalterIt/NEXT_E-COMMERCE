"use client";
import AdminLayout from "@components/AdminLayout";
import Form from "@components/Form";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const CreateProduct = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
  });
  const [images, setImages] = useState([]);
  const [properties, setProperties] = useState({});

  const createProduct = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/products/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: product.title,
          description: product.description,
          price: product.price,
          category: product.category,
          images,
          properties,
        }),
      });

      if (res.ok) {
        router.push("/admin/products");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AdminLayout>
      <Form
        type="Create"
        product={product}
        setProduct={setProduct}
        isSubmitting={isSubmitting}
        handleSubmit={createProduct}
        images={images}
        setImages={setImages}
        properties={properties}
        setProperties={setProperties}
      />
    </AdminLayout>
  );
};

export default CreateProduct;
