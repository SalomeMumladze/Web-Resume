import React from "react";
import { Button, Typography, notification } from "antd";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import mail from "assets/mail.svg";
import google from "assets/google.svg";
import FormikInput from "components/FormikInput";

const signUpSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Please confirm your password"),
});

export default function RegisterPage() {
  const [api, contextHolder] = notification.useNotification();

  const showSuccess = (message) => {
    api.success({
      message,
      duration: 3,
    });
  };

  const showError = (message) => {
    api.error({
      message,
      duration: 3,
    });
  };

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      // Example: if email already exists, show error
      if (values.email === "test@example.com") {
        showError("This email is already registered");
      } else {
        showSuccess("Account created successfully!");
      }
      setSubmitting(false);
    }, 1000);
  };

  const handleGoogleSignIn = () => {
    showSuccess("Google sign in functionality would be integrated here");
  };

  const initialValues = { email: "", password: "", confirmPassword: "" };
  const validationSchema = signUpSchema;

  return (
    <>
      {contextHolder}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        validateOnChange={true}
        validateOnBlur={true}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            <Field
              name="email"
              component={FormikInput}
              placeholder="Mail"
              size="small"
              prefix={<img src={mail} className="mr-1" />}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field
                name="password"
                type="password"
                component={FormikInput}
                placeholder="Password"
              />
              <Field
                name="confirmPassword"
                type="password"
                component={FormikInput}
                placeholder="Confirm password"
              />
            </div>

            <Button
              type="primary"
              size="large"
              block
              htmlType="submit"
              loading={isSubmitting}
              className="rounded-lg h-12 bg-mediumBlue text-sm font-normal !mt-6 !mb-2"
            >
              Create an account
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#EBEDEF]"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-4 bg-white text-grayishBlue">
                  OR SIGN IN WITH
                </span>
              </div>
            </div>

            <Button
              size="large"
              icon={<img src={google} />}
              onClick={handleGoogleSignIn}
              className="!rounded-xl h-12 font-normal text-sm border-lightBlue !my-6 !shadow-sm w-full"
            >
              Continue with Google
            </Button>

            <Typography className="text-center text-xs text-grayishBlue !mt-0">
              By creating an account, you agree to our{" "}
              <a href="#" className="!text-black font-medium hover:underline">
                Terms & Services
              </a>
            </Typography>
          </Form>
        )}
      </Formik>
    </>
  );
}
