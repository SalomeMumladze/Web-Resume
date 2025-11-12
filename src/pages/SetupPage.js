import React, { useState } from "react";
import {
  Button,
  Input,
  Checkbox,
  Typography,
  Upload,
  notification,
} from "antd";
import { Formik, Form, Field } from "formik";
import bgImage from "../assets/bg-image.svg";
import logo from "../assets/logo.svg";
import FormikInput from "../components/FormikInput";
import * as Yup from "yup";
import CountrySelect from "../components/CountrySelect";

export default function SetupPage() {
  const [checked, setChecked] = useState("hidden");
  const [profilePhoto, setProfilePhoto] = useState(null);

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

  const profileSchema = Yup.object({
    first_name: Yup.string()
      .min(2, "Name must be at least 2 characters")
      .required("Visible name is required"),
    last_name: Yup.string()
      .min(2, "Last name must be at least 2 characters")
      .required("Last name is required"),
    specialization: Yup.string()
      .min(3, "Specialization must be at least 3 characters")
      .required("Specialization is required"),
    status: Yup.string().required("Status is required"),
    phone: Yup.string()
      .matches(/^[0-9]+$/, "Phone number must contain only digits")
      .min(9, "Phone number must be at least 9 digits")
      .required("Phone number is required"),
    location: Yup.string()
      .min(2, "Location must be at least 2 characters")
      .required("Location is required"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    const finalData = {
      ...values,
      visibility: checked,
      profilePhoto: profilePhoto ? profilePhoto.name : null,
    };
    console.log(finalData);

    setTimeout(() => {
      if (values.first_name.toLowerCase() === "test") {
        showError("This name cannot be used");
      } else {
        showSuccess("Account created successfully!");
      }
      setSubmitting(false);
    }, 1000);
  };

  const initialValues = {
    first_name: "",
    last_name: "",
    specialization: "",
    status: "",
    phone: "",
    location: "",
  };

  const handleFileChange = (file) => {
    setProfilePhoto(file);
    return false;
  };

  return (
    <>
      {contextHolder}
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
        <div className="w-full container flex items-center lg:justify-between justify-center gap-12">
          <div className="flex-1 hidden lg:block">
            <div className="relative">
              <img src={bgImage} alt="Background" />
            </div>
          </div>

          <div className="flex-1 max-w-[519px] w-full">
            <img src={logo} className="m-auto mb-4" alt="Logo" />

            <div className="bg-white rounded-[40px] p-6">
              <h1 className="text-3xl font-bold text-gray-900 my-8">
                Complete Your Profile
              </h1>
              <Formik
                initialValues={initialValues}
                validationSchema={profileSchema}
                onSubmit={handleSubmit}
                validateOnChange={true}
                validateOnBlur={true}
              >
                {({ isSubmitting, setFieldValue }) => (
                  <Form className="space-y-4">
                    <div className="gap-4 sm:grid-cols-2 grid-cols-1 grid item-center">
                      <Field
                        name="first_name"
                        component={FormikInput}
                        placeholder="First name"
                        size="large"
                      />
                      <Field
                        size="large"
                        name="last_name"
                        component={FormikInput}
                        placeholder="Last name"
                      />
                    </div>
                    <Field
                      size="large"
                      name="specialization"
                      component={FormikInput}
                      placeholder="What you do? (specialization)"
                    />
                    <Field
                      size="large"
                      name="status"
                      component={FormikInput}
                      placeholder="Status"
                    />

                    <CountrySelect
                      onChange={(phone) => setFieldValue("phone", phone)}
                    />

                    <Field
                      size="large"
                      name="location"
                      component={FormikInput}
                      placeholder="Location"
                    />

                    <Upload
                      accept="image/*"
                      showUploadList={false}
                      beforeUpload={handleFileChange}
                      maxCount={1}
                      className="w-full block"
                    >
                      <Input
                        placeholder="Profile photo"
                        className="rounded-xl shadow-sm h-12 cursor-pointer w-full"
                        value={profilePhoto ? profilePhoto.name : ""}
                        readOnly
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
                    </Upload>

                    <Typography className="text-sm font-normal !mt-6">
                      Profile visibility
                    </Typography>
                    <Typography className="text-sm font-normal text-grayishBlue !m-1">
                      If you set your profile as hidden, it will not appear in
                      the public profile feed. Employers and other users won't
                      be able to find you. This may reduce your chances of being
                      contacted.
                    </Typography>

                    <div className="grid gap-1">
                      <Checkbox
                        className="text-sm text-grayishBlue"
                        checked={checked === "visible"}
                        onChange={() =>
                          setChecked(
                            checked === "visible" ? "hidden" : "visible"
                          )
                        }
                      >
                        Visible
                      </Checkbox>

                      <Checkbox
                        className="text-sm"
                        checked={checked === "hidden"}
                        onChange={() =>
                          setChecked(
                            checked === "hidden" ? "visible" : "hidden"
                          )
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
                      loading={isSubmitting}
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
    </>
  );
}
