import React, { act, useState } from "react";
import { Segmented } from "antd";
import bgImage from "../assets/bg-image.svg";
import logo from "../assets/logo.svg";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState("sign_up");

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
            <Segmented
              className="h-11"
              options={[
                {
                  label: "Sign up",
                  value: "sign_up",
                },
                {
                  label: "Sign in",
                  value: "sign_in",
                },
              ]}
              size="large"
              shape="round"
              value={activeTab}
              onChange={(val) => setActiveTab(val)}
            />

            <h1 className="text-3xl font-bold text-gray-900 my-8">
              {activeTab === "sign_up"
                ? "Create an Account"
                : "Sign into your account"}
            </h1>
            {activeTab === "sign_up" ? <RegisterPage /> : <LoginPage />}
          </div>
        </div>
      </div>
    </div>
  );
}
