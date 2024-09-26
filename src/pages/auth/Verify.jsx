import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { verify } from "../../services/auth/authAction";
import { toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";
import { setAccessToken } from "../../lib/secureLocalStorage";

export function OtpVerification() {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;
  console.log("email", email);
  const initialValues = {
    otp: Array(6).fill(""), // Initialize an array with 6 empty strings
  };

  const validationSchema = Yup.object({
    otp: Yup.array()
      .of(
        Yup.string()
          .length(1, "Must be a single digit")
          .matches(/^\d$/, "Must be a number")
      )
      .length(6, "Must be exactly 6 digits"),
  });

  const handleSubmit = async (values) => {
    const otp = values.otp.join("");
    const requestVerify = {
      email: email,
      verificationCode: otp,
    };
    console.log("requestVerify", requestVerify);
    const verifyRes = await verify(requestVerify);
    console.log("verifyRes", verifyRes);
    if (verifyRes !== undefined) {
      toast.error(verifyRes.errors.description);
    }
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-textBlack">
      <div className="max-w-md px-4 py-10 mx-auto text-center bg-white shadow sm:px-8 rounded-xl dark:bg-cardDark border">
        <section className="mb-8">
          <h1 className="mb-1 text-2xl font-bold dark:text-textDark">OTP Verification</h1>
          <p className="text-[15px] text-slate-500 dark:text-textDark">
            Enter the 6-digit verification code that was sent to your Email.
          </p>
        </section>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, setFieldValue }) => (
            <Form id="otp-form">
              <div className="flex items-center justify-center gap-3 ">
                {values.otp.map((digit, index) => (
                  <Field key={index} name={`otp[${index}]`}>
                    {({ field }) => (
                      <input
                        {...field}
                        type="text"
                        className="p-4 text-2xl font-extrabold text-center border border-transparent rounded outline-none appearance-none w-14 h-14 text-slate-900 bg-slate-100 hover:border-slate-200 focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                        maxLength="1"
                        onKeyDown={(e) => {
                          if (!/^[0-9]$/.test(e.key) && e.key !== "Backspace") {
                            e.preventDefault();
                          }

                          if (e.key === "Backspace" && digit === "") {
                            if (index > 0) {
                              setFieldValue(`otp[${index - 1}]`, "");
                              document
                                .getElementById(`otp-input-${index - 1}`)
                                .focus();
                            }
                          }

                          if (e.key === "Delete") {
                            e.preventDefault();
                          }
                        }}
                        onChange={(e) => {
                          const value = e.target.value;
                          if (/^[0-9]$/.test(value)) {
                            setFieldValue(`otp[${index}]`, value);
                            if (index < values.otp.length - 1) {
                              document
                                .getElementById(`otp-input-${index + 1}`)
                                .focus();
                            }
                          }
                        }}
                        id={`otp-input-${index}`}
                      />
                    )}
                  </Field>
                ))}
              </div>
              <div className="max-w-[260px] mx-auto mt-4">
                <button
                  type="submit"
                  className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-green-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-green-600 focus:outline-none focus:ring focus:ring-indigo-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150"
                >
                  Verify Account
                </button>
              </div>
              {/* <div className="mt-4 text-sm text-slate-500">
              Didn't receive code?{" "}
              <a
                className="font-medium text-indigo-500 hover:text-indigo-600"
                href="#0"
              >
                Resend
              </a>
            </div> */}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
