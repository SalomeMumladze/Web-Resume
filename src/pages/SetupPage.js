import React, { useState } from "react";
import { Button, Input, Checkbox, Typography } from "antd";
import { Formik, Form, Field } from "formik";
import bgImage from "../assets/bg-image.png";
import logo from "../assets/logo.svg";
import FormikInput from "../components/FormikInput";
import * as Yup from "yup";
import CountrySelect from "../components/CountrySelect";

export default function SetupPage() {
  const [checked, setChecked] = useState("hidden");

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
  });

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setTimeout(() => {
      alert(`"Account created successfully!`);
      setSubmitting(false);
    }, 1000);
  };

  const initialValues = { email: "", password: "" };

  const validationSchema = signUpSchema;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="w-full container flex items-center lg:justify-between justify-center gap-12">
        <div className="flex-1 hidden lg:block">
          <div className="relative">
            <img src={bgImage} />
          </div>
        </div>

        <div className="flex-1 max-w-[519px] w-full">
          <img src={logo} className="m-auto mb-4" />

          <div className="bg-white rounded-[40px] p-6">
            <h1 className="text-3xl font-bold text-gray-900 my-8">
              Complete Your Profile
            </h1>
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
                    name="visible_name"
                    component={FormikInput}
                    placeholder="visible name"
                    size="small"
                  />
                  <Field
                    size="small"
                    name="last_name"
                    component={FormikInput}
                    placeholder="visible name"
                  />
                  <Field
                    size="small"
                    name="specialization"
                    component={FormikInput}
                    placeholder="What you do? (specialization)"
                  />
                  <Field
                    size="statu"
                    name="Statu"
                    component={FormikInput}
                    placeholder="Status"
                  />
                  <CountrySelect />
                  <Field
                    size="Location"
                    name="Location"
                    component={FormikInput}
                    placeholder="Location"
                  />
                  <Input
                    placeholder="Profile photo"
                    className="rounded-xl shadow-sm h-12"
                    suffix={
                      <Button
                        size="small"
                        shape="round"
                        className="text-mediumBlue bg-mediumBlue/10 border-none text-sm font-normal h-8 !px-4"
                      >
                        Choose File
                      </Button>
                    }
                  />
                  <Typography className="text-sm font-normal">
                    Profile visibility
                  </Typography>
                  <Typography className="text-sm font-normal text-grayishBlue !m-1">
                    if you set your profile as hidden, it will not appear in the
                    public profile feed. Employeers and other users won’t be
                    able to find you. this may reduce your chances of being
                    contacter.
                  </Typography>
                  <div className="grid gap-1">
                    <Checkbox
                      className="text-sm text-grayishBlue"
                      checked={checked === "visible"}
                      onChange={() =>
                        setChecked(checked === "visible" ? null : "visible")
                      }
                    >
                      Visible
                    </Checkbox>

                    <Checkbox
                      className="text-sm "
                      checked={checked === "hidden"}
                      onChange={() =>
                        setChecked(checked === "hidden" ? null : "hidden")
                      }
                    >
                      Hidden
                    </Checkbox>
                  </div>
                  <Button
                    type="primary"
                    size="large"
                    block
                    htmlType="submit"
                    className="rounded-lg h-12 bg-mediumBlue text-sm font-normal !mt-6 !mb-2"
                  >
                    Finish Setup
                  </Button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}
