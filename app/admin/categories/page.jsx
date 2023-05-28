"use client";
import AdminLayout from "@components/AdminLayout";
import { useEffect, useState } from "react";

const Categories = () => {
  const [name, setName] = useState("");
  const [editedCategory, setEditedCategory] = useState(null);
  const [categories, setCategories] = useState([]);
  const [parentCategory, setParentCategory] = useState("");
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [singleCategory, setSingleCategory] = useState("");

  const fetchCategories = async () => {
    const response = await fetch("/api/categories");
    const data = await response.json();

    setCategories(data);
  };

  useEffect(() => {
    fetchCategories();
  }, [name]);
  const saveCategory = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/categories/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          parentCategory,
        }),
      });

      if (res.ok) {
        setName("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const editCategory = async (category) => {
    setEditedCategory(category);
    setName(category.name);
    setParentCategory(category.parent?._id);
  };

  const handleDelete = async (id) => {
    // try {
    //   await fetch(`/api/categories/${id.toString()}`, {
    //     method: "DELETE",
    //   });
    //   const filteredCategories = categories.filter((item) => item._id !== id);
    //   setCategories(filteredCategories);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <AdminLayout>
      <h1>Categories</h1>
      <label htmlFor="">
        {editCategory ? "Edit" : "Create New"} Category Name
      </label>
      <form onSubmit={saveCategory} className="flex gap-1">
        <input
          className="mb-0"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder=" Category Name"
        />
        <select
          className="mb-0 w-[35%] "
          onChange={(e) => setParentCategory(e.target.value)}
          value={parentCategory ? parentCategory : ""}
        >
          <option value="">No Parent Category</option>

          {categories?.map((category) => (
            <option
              key={category._id}
              className="capitalize"
              value={category._id}
            >
              {category.name}
            </option>
          ))}
        </select>
        <button type="submit" className="btn_primary py-1">
          Save
        </button>
      </form>

      <table className="table mt-4">
        <thead>
          <tr>
            <th>Category Name</th>
            <th>Parent Category</th>
            <th className="w-[12vw] ">Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories?.map((category) => (
            <tr key={category._id}>
              <td className="capitalize">{category.name}</td>
              <td className="capitalize">{category?.parent?.name}</td>

              <td className="flex  justify-center gap-8">
                <span className="" onClick={() => editCategory(category)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-blue-800 font-semibold cursor-pointer hover:scale-105 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                    />
                  </svg>
                </span>

                <span
                  className=""
                  onClick={() =>
                    setConfirmDelete(!confirmDelete) ||
                    setSingleCategory(category)
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-red-500 font-semibold cursor-pointer hover:scale-105 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>

                  {confirmDelete && (
                    <div className="w-full h-screen z-[9999] fixed top-0 left-0 flex items-center justify-center bg-[#00000037]">
                      <div
                        className={`w-[55%] 800px:w-[50%] bg-white shadow rounded h-[30vh]   min-h-[30vh] p-3`}
                      >
                        <div
                          className="w-full flex justify-end mb-4"
                          onClick={() => setConfirmDelete(!confirmDelete)}
                        >
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-6 h-6 cursor-pointer"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                        </div>
                        <div>
                          <h3 className="text-[20px] font-Poppins text-center font-[600]">
                            Are you sure you want to delete:
                            <span className="whitespace-nowrap text-blue-800">
                              {" "}
                              "{singleCategory.name}"
                            </span>
                            ?
                          </h3>
                        </div>
                        <div className="flex justify-center gap-14 mt-9">
                          <button
                            className="btn_primary"
                            onClick={() => setConfirmDelete(!confirmDelete)}
                          >
                            Cancel
                          </button>

                          <button
                            className="btn_primary !bg-red-500"
                            onClick={() =>
                              handleDelete(singleCategory._id) ||
                              setConfirmDelete(!confirmDelete)
                            }
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </AdminLayout>
  );
};

export default Categories;
