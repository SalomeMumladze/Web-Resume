import React from "react";
import { Input } from "antd";

const FormikInput = ({
  field,
  form,
  placeholder,
  prefix,
  type = "text",
  ...props
}) => {
  const hasError = form.touched[field.name] && form.errors[field.name];

  const InputComponent = type === "password" ? Input.Password : Input;

  return (
    <div>
      <InputComponent
        {...field}
        {...props}
        size="large"
        placeholder={placeholder}
        prefix={prefix}
        className={`rounded-xl ${hasError ? "border-red-500" : ""} shadow-sm h-12`}
        status={hasError ? "error" : ""}
        visibilityToggle={false}
      />
      {hasError && (
        <div className="text-red-500 text-xs mt-1">
          {form.errors[field.name]}
        </div>
      )}
    </div>
  );
};

export default FormikInput;
