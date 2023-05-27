import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "@firebase";
import Image from "next/image";
import { useState } from "react";
import Spinner from "./Spinner";
import { ReactSortable } from "react-sortablejs";

const Form = ({
  type,
  product,
  setProduct,
  isSubmitting,
  handleSubmit,
  images,
  setImages,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const uploadPhoto = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const files = Array.from(e.target.files);
    // setImages((prevImages) => [...prevImages, ...files]);
    const fileNames = files.map(
      (file) => `${new Date().getTime()}${file.name}`
    );
    const storage = getStorage(app);
    const storageRefs = fileNames.map((fileName) => ref(storage, fileName));
    const imagesUrlFirebase = [];

    for (let i = 0; i < files.length; i++) {
      const snapshot = await uploadBytesResumable(storageRefs[i], files[i]);
      const downloadURL = await getDownloadURL(snapshot.ref);
      imagesUrlFirebase.push(downloadURL);
    }

    if (!imagesUrlFirebase.length) {
      setImages(images);
    }
    setImages([...images, ...imagesUrlFirebase]);
    setIsLoading(false);
  };

  // console.log(images);

  function removePhoto(e, filename) {
    e.preventDefault();
    setImages([...images.filter((image) => image !== filename)]);
  }

  const updateImagesOrder = (images) => {
    setImages(images);
  };

  return (
    <div className="">
      <h1 className="">{type} Product</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="">Product Name</label>
        <input
          type="text"
          value={product.title}
          onChange={(e) => setProduct({ ...product, title: e.target.value })}
          placeholder="Product Name"
          required
        />

        <label htmlFor="">Pictures</label>
        <div className="mt-2 mb-4 gap-2 flex flex-wrap">
          {/* <div className="mt-2 mb-4 gap-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6"> */}
          <ReactSortable
            list={images}
            className="gap-2 flex flex-wrap "
            setList={updateImagesOrder}
          >
            {images?.length > 0 &&
              images.map((link, index) => (
                <div key={index} className="h-32  flex relative">
                  <img
                    src={link}
                    width={32}
                    height={32}
                    alt={link}
                    className="rounded-2xl !w-full object-cover"
                  />
                  {/* <Image className="rounded-2xl w-full object-cover" src={link} /> */}
                  <button
                    onClick={(e) => removePhoto(e, link)}
                    className="cursor-pointer absolute bottom-1 right-1 text-white bg-black bg-opacity-50 p-1 hover:bg-red-600 rounded-2xl"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                </div>
              ))}
          </ReactSortable>

          {isLoading && (
            <div className="rounded-2xl w-32 h-32 flex items-center justify-center relative">
              <Spinner />
            </div>
          )}

          <label className="h-32 flex items-center justify-center cursor-pointer gap-2 border bg-gray-100 rounded-2xl p-2 text-[20px] text-gray-600 hover:text-blue-800  ">
            <input
              type="file"
              multiple
              className="hidden"
              onChange={uploadPhoto}
              required={images?.length ? false : true}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
              />
            </svg>
            Upload
          </label>
        </div>

        {/* <div className="mb-2">
          <label className="w-24 h-24  flex items-center flex-col justify-center font-semibold text-gray-500 rounded-lg bg-gray-100 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M11.47 2.47a.75.75 0 011.06 0l4.5 4.5a.75.75 0 01-1.06 1.06l-3.22-3.22V16.5a.75.75 0 01-1.5 0V4.81L8.03 8.03a.75.75 0 01-1.06-1.06l4.5-4.5zM3 15.75a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z"
                clipRule="evenodd"
              />
            </svg>
            Updload
            <input
              type="file"
              className="hidden"
              //   value={product.images}
              onChange={(e) => setImages({ ...images, images: e.target.files })}
            />
          </label>
          {!images?.length && (
            <div className="">No Pictures for this Product Yet!</div>
          )}
        </div> */}

        <label htmlFor="">Product Description</label>
        <textarea
          type="text"
          value={product.description}
          onChange={(e) =>
            setProduct({ ...product, description: e.target.value })
          }
          placeholder="Description"
          required
        />
        <label htmlFor="">Product Price in (USD)</label>
        <input
          type="number"
          value={product.price}
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
          placeholder="Product Price"
          required
        />
        <button type="submit" className="btn_primary" disabled={isSubmitting}>
          {isSubmitting ? `${type}ing...` : type}
        </button>
      </form>
    </div>
  );
};

export default Form;
