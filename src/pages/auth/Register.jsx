import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export function Register() {
  const navigate = useNavigate();
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const initialValues = {
    email: "",
    password: "Ab12345&",
    confirmedPassword: "Ab12345&",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("email is invalid").required("email is required"),
    password: Yup.string()
      .matches(
        regex,
        "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special case character"
      )
      .required("password is required"),
    confirmedPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("confirm password is required"),
  });
  // handle register
  const handleRegister = (values) => {
    console.log("values", values);
    navigate("/register-personal-info", {
      state: {
        accountInfo: {
          email: values.email,
          password: values.password,
          confirmedPassword: values.confirmedPassword,
        },
      },
    });
  };
  return (
    <div className="bg-gray-50 dark:bg-textBlack">
      <section className="flex items-center justify-center w-full h-screen max-w-2xl mx-auto ">
        <div className="container ">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              handleRegister(values);
            }}
          >
            <Form className="flex items-center gap-10 p-5 rounded-md bg-slate-200 dark:bg-cardDark border">
              {/* left content */}
              <div className="w-1/2">
                <Link to="/" className="flex self-center">
                  <img src="src/assets/image/logo.png" alt="logo" />
                </Link>
                <p className="mt-10 text-xl font-bold text-center dark:text-textDark">
                  Start Your Learning Journey with SERKSA
                </p>
              </div>
              {/* right content */}
              <div className="w-full">
                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white self-center">
                  Sign Up to SERKSA
                </h1>

                {/* email */}
                <div className="mt-5">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@gmail.com"
                  ></Field>
                  <ErrorMessage
                    className="text-red-600"
                    component="div"
                    name="email"
                  ></ErrorMessage>
                </div>
                {/* password */}
                <div className="mt-5">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <Field
                    type="password"
                    name="password"
                    id="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter Password"
                  ></Field>
                  <ErrorMessage
                    className="text-red-600"
                    component="div"
                    name="password"
                  ></ErrorMessage>
                </div>
                {/* confirm password */}
                <div className="mt-5">
                  <label
                    htmlFor="confirmedPassword"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Confirm Password
                  </label>
                  <Field
                    type="password"
                    name="confirmedPassword"
                    id="confirmedPassword"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Re-enter Password"
                  ></Field>
                  <ErrorMessage
                    className="text-red-600"
                    component="div"
                    name="confirmedPassword"
                  ></ErrorMessage>
                </div>

                <button
                  type="submit"
                  className="w-full px-4 py-2 mt-5 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                >
                  Next
                </button>
                <p class="text-sm font-light mt-3 text-gray-900 dark:text-gray-400">
                  Alreay have an account?
                  <Link
                    to="/login"
                    className="text-Small hover:text-blueLight dark:hover:text-blue-400"
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
