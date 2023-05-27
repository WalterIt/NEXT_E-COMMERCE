"use client";
import AdminLayout from "@components/AdminLayout";
import Form from "@components/Form";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const UpdateProduct = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const productId = searchParams.get("id");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
  });
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getProductDetails = async () => {
      const response = await fetch(`/api/products/${productId}`);
      const data = await response.json();

      setProduct({
        title: data.title,
        description: data.description,
        price: data.price,
      });

      setImages(data.images);
    };

    if (productId) getProductDetails();
  }, [productId]);

  const updateProduct = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!productId) return alert("Missing ProductId!");

    try {
      const response = await fetch(`/api/products/${productId}`, {
        method: "PATCH",
        body: JSON.stringify({
          title: product.title,
          description: product.description,
          price: product.price,
          images,
        }),
      });

      if (response.ok) {
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
        type="Update"
        product={product}
        images={images}
        setImages={setImages}
        setProduct={setProduct}
        isSubmitting={isSubmitting}
        handleSubmit={updateProduct}
      />
    </AdminLayout>
  );
};

export default UpdateProduct;
