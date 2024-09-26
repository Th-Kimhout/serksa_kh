import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { login } from "../../services/auth/authAction";
import { useNavigate } from "react-router-dom";
import { getAccessToken, setAccessToken } from "../../lib/secureLocalStorage";
import { Link } from "react-router-dom";
import logo from "../../assets/Image/logo.png"
export function Login() {
  const navigate = useNavigate();
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  // handle login

  const handleLogin = async (values) => {
    const loginRes = await login(values);
    {
      loginRes.accessToken && toast.success("Login Successfully");

      setAccessToken(loginRes.accessToken);
      navigate("/");
    }
    {
      loginRes == "" && toast.error(loginRes.message);
    }
  };
  return (
    <div className="bg-gray-50 dark:bg-textBlack">
      <section className="flex items-center justify-center w-full h-screen max-w-2xl mx-auto">
        <div className="container">
          <Formik
            initialValues={{
              email: "",
              password: "rainz@1234",
            }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email("email is invalid")
                .required("email is required"),
              password: Yup.string()
                // .matches(
                //   regex,
                //   "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special case character"
                // )
                .required("password is required"),
            })}
            onSubmit={(values, { resetForm }) => {
              handleLogin(values);
              resetForm();
            }}
          >
            <Form className="flex flex-col p-10 rounded-md bg-slate-200 dark:bg-cardDark border">
              <img
                src={logo}
                alt="logo"
                className="self-center w-24 m-3"
              />{" "}
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white self-center">
                Sign in to your account
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
              <button
                type="submit"
                className="w-full px-4 py-2 mt-5 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
              >
                Login
              </button>
              <p class="text-sm font-light mt-3 text-gray-900 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <Link
                  to="/register"
                  className="text-Small hover:text-blueLight dark:hover:text-blue-400"
                >
                  Sign Up
                </Link>
              </p>
            </Form>
          </Formik>
        </div>

        <ToastContainer />
      </section>
    </div>
  );
}
