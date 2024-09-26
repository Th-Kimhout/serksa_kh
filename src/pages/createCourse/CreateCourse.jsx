import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Formik, ErrorMessage, Form, Field } from "formik";
import { useState, useEffect } from "react";
import * as Yup from "yup";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { getAllCategories } from "../../services/courses/getCategory";
import { createCourse } from "../../services/courses/getAllCourse";
import { ChevronsLeft } from "lucide-react";
import React from "react";

export function CreateCourse() {
  const [categories, setCategories] = React.useState([]);

  const fetchCategories = async () => {
    const response = await getAllCategories();
    if (response) {
      setCategories(response);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleCreate = async (values, { resetForm }) => {
    // Dynamically generate slug from title if not provided
    const finalSlug =
      values.slug ||
      values.title
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "");

    const updatedValues = {
      title: values.title,
      slug: finalSlug,
      description: values.description,
      categoryName: values.categoryName,
      price: values.price,
      thumbnail: values.thumbnail,
      content: values.content,
    };

    const submitRes = await createCourse(updatedValues);

    console.log(submitRes);

    // if (submitRes.id) {
    //   toast.success("Add Course Successfully");
    //   resetForm(); // Reset form after successful submission
    // } else {
    //   toast.error(submitRes.message);
    // }
  };

  return (
    <>
      <section className="flex items-center justify-between p-4 mt-4 rounded-lg bg-slate-200">
        <Link
          to="/create-course-overview"
          className="flex items-center justify-center gap-2"
        >
          <span>Create Course</span>
        </Link>
      </section>

      <section className="flex justify-center">
        <Formik
          initialValues={{
            title: "",
            slug: "",
            description: "",
            categoryName: "",
            price: "",
            thumbnail: "",
            content: "",
          }}
          validationSchema={Yup.object({
            title: Yup.string().required("Title is required"),
            slug: Yup.string().nullable(), // Slug is nullable
            description: Yup.string().required("Description is required"),
            categoryName: Yup.string().required("Category is required"),
            price: Yup.string()
              .matches(
                /^\$?(\d{1,3}(,\d{3})*(\.\d{1,2})?)$/,
                "Price must be a valid number"
              )
              .required("Price is required"),
            thumbnail: Yup.string().required("Thumbnail is required"),
            content: Yup.string().required("Content is required"),
          })}
          onSubmit={handleCreate}
        >
          {({ values, handleChange, handleSubmit, setFieldValue }) => (
            <Form
              onSubmit={handleSubmit}
              className="w-full p-5 rounded-md bg-slate-200"
            >
              {/* Course Title */}
              <div className="mt-5">
                <label
                  htmlFor="title"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Course's Title
                </label>
                <Field
                  type="text"
                  name="title"
                  id="title"
                  value={values.title}
                  onChange={(e) => {
                    handleChange(e); // Formik's handleChange
                    const newSlug = e.target.value
                      .toLowerCase()
                      .replace(/\s+/g, "-")
                      .replace(/[^\w-]+/g, "");
                    setFieldValue("slug", newSlug); // Dynamically set slug in Formik state
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Course's Title"
                />
                <ErrorMessage
                  className="text-red-600"
                  component="div"
                  name="title"
                />
              </div>
              {/* Slug */}
              <div className="mt-5">
                <label
                  htmlFor="slug"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Slug
                </label>
                <Field
                  type="text"
                  name="slug"
                  id="slug"
                  value={values.slug}
                  readOnly
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Auto-generated Slug"
                />
                <ErrorMessage
                  className="text-red-600"
                  component="div"
                  name="slug"
                />
              </div>
              {/* Description */}{" "}
              <div className="mt-5">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <Field
                  type="text"
                  name="description"
                  id="description"
                  as="textarea"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none "
                  rows={6}
                  cols={40}
                  placeholder="write your description here"
                ></Field>
                <ErrorMessage
                  className="text-red-600"
                  component="div"
                  name="description"
                ></ErrorMessage>
              </div>
              {/* thumbnail */}
              <div className="mt-5">
                <label
                  htmlFor="thumbnail"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Thumbnail
                </label>
                <Field
                  type="text"
                  name="thumbnail"
                  id="thumbnail"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="link image"
                ></Field>
                <ErrorMessage
                  className="text-red-600"
                  component="div"
                  name="thumbnail"
                ></ErrorMessage>
              </div>
              {/* Price */}
              <div className="mt-5">
                <label
                  htmlFor="price"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Price
                </label>
                <Field
                  type="text"
                  name="price"
                  id="price"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="$$"
                ></Field>
                <ErrorMessage
                  className="text-red-600"
                  component="div"
                  name="price"
                ></ErrorMessage>
              </div>
              {/* Content */}
              <div className="mt-5">
                <label
                  htmlFor="content"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Content
                </label>
                <Field
                  type="text"
                  name="content"
                  id="content"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="content"
                ></Field>
                <ErrorMessage
                  className="text-red-600"
                  component="div"
                  name="content"
                ></ErrorMessage>
              </div>
              {/* Category */}
              <div className="mt-5">
                <label
                  htmlFor="categoryName"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Category
                </label>
                <Field
                  name="categoryName"
                  id="categoryName"
                  as="select"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="categories"
                >
                  {categories.map((category) => {
                    return (
                      <option key={category.id} value={category.name}>
                        {category.name}
                      </option>
                    );
                  })}
                </Field>
                <ErrorMessage
                  className="text-red-600"
                  component="div"
                  name="category"
                ></ErrorMessage>
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 mt-5 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
              >
                Create Course
              </button>
            </Form>
          )}
        </Formik>
        <ToastContainer />
      </section>
    </>
  );
}
