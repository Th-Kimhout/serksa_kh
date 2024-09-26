import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import { register } from "../../services/auth/authAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export function RegisterPersonalInfo() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Using optional chaining to safely access accountInfo
  const accountInfo = location?.state?.accountInfo || {};
  
  console.log("Account Info", accountInfo);

  const initialValues = {
    name: "",
    gender: "Male",
    biography: "",
    role: "Student",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Username is required"),
    biography: Yup.string().required("Biography is required"),
    role: Yup.string().required("Role is required"),
  });

  const handleRegister = async (values) => {
    const allData = {
      email: accountInfo.email,
      password: accountInfo.password,
      confirmedPassword: accountInfo.confirmedPassword,
      name: values.name,
      gender: values.gender,
      biography: values.biography,
      role: values.role,
    };

    console.log("allData", allData);

    const registerRes = await register(allData);

    if (!registerRes) {
      navigate("/verifyOTP", { state: { email: allData.email } });
    } else {
      toast.error(registerRes.error.description || "Registration failed!");
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <section className="flex items-center justify-center w-full h-screen max-w-2xl mx-auto">
        <div className="container">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              handleRegister(values);
              resetForm();
            }}
          >
            <Form className="p-10 rounded-md bg-slate-200 dark:bg-slate-800">
              <div className="w-full">
                <Link
                  to="/register"
                  className="flex items-center gap-2 mb-4 hover:underline dark:text-textDark"
                >
                  <FontAwesomeIcon icon={faArrowLeft} />
                  Back
                </Link>
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign Up to SERKSA
                </h1>

                {/* Name */}
                <div className="mt-5">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Username
                  </label>
                  <Field
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Input your name..."
                  />
                  <ErrorMessage
                    className="text-red-600"
                    component="div"
                    name="name"
                  />
                </div>

                {/* Gender */}
                <div className="mt-5">
                  <label
                    htmlFor="gender"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Gender
                  </label>
                  <Field
                    as="select"
                    name="gender"
                    id="gender"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </Field>
                  <ErrorMessage
                    className="text-red-600"
                    component="div"
                    name="gender"
                  />
                </div>

                {/* Biography */}
                <div className="mt-5">
                  <label
                    htmlFor="biography"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Biography
                  </label>
                  <Field
                    type="text"
                    name="biography"
                    id="biography"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Bio"
                  />
                  <ErrorMessage
                    className="text-red-600"
                    component="div"
                    name="biography"
                  />
                </div>

                {/* Role */}
                <div className="mt-5">
                  <label
                    htmlFor="role"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Role
                  </label>
                  <Field
                    as="select"
                    name="role"
                    id="role"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="Student">Student</option>
                    <option value="Instructor">Instructor</option>
                  </Field>
                  <ErrorMessage
                    className="text-red-600"
                    component="div"
                    name="role"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-4 py-2 mt-5 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                >
                  Sign Up
                </button>

                <p className="text-sm font-light mt-3 text-gray-900 dark:text-gray-400">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-Small hover:text-blue-500 dark:hover:text-blue-400"
                  >
                    Sign in
                  </Link>
                </p>
              </div>
            </Form>
          </Formik>
        </div>

        <ToastContainer />
      </section>
    </div>
  );
}
