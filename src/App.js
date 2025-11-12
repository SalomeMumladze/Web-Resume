import "./index.css";
import { Button, Flex, Typography, Menu, Dropdown } from "antd";
import { ConfigProvider } from "antd";
import { antdOverride } from "./ant-design";
import arrowIcon from "./assets/arrow.svg";
import companyLogo from "./assets/company-logo.svg";
import link from "./assets/link.svg";
import { MenuOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import VacanciesTable from "./components/VacanciesTable";

function App() {
  const items = [
    { key: "home", label: "Home" },
    { key: "vacancies", label: "Vacancies" },
    { key: "companies", label: "Companies" },
    { key: "resume-feed", label: "Resume Feed" },
  ];

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menu = <Menu items={items} />;

  return (
    <ConfigProvider theme={antdOverride}>
      <div className="container">
        <div className="fixed container top-4 right-0 left-0 bg-lightGray p-4 text-center border border-solid border-lightBlue sm:h-16 rounded-[20px]">
          <Flex align="center" className="h-full" justify="space-between">
            <Typography className="font-SfProBlackItalic text-base">
              WebResume
            </Typography>

            {isMobile ? (
              <Dropdown overlay={menu} trigger={["click"]}>
                <Button icon={<MenuOutlined />} />
              </Dropdown>
            ) : (
              <Menu
                mode="horizontal"
                items={items}
                className="!p-0 gap-6 bg-transparent border-none text-grayishBlue text-sm font-normal text-SfProRegular w-1/3 flex justify-center"
              />
            )}

            <div className="tems-center sm:flex grid gap-[10px]">
              <Button
                type="text"
                className="bg-lightPastelBlue text-brightBlue border border-solid border-pastelBlue rounded-xl sm:w-32 h-[34px] w-fit sm:py-2 sm:px-8"
              >
                Log In
              </Button>
              <Button
                type="text"
                className="bg-brightBlue text-white rounded-xl sm:w-32 w-fit h-[34px] sm:py-2 sm:px-8"
              >
                Register
              </Button>
            </div>
          </Flex>
        </div>
        <div className="mt-28 grid gap-5">
          <div className=" bg-lightGray p-4 border border-solid border-lightBlue rounded-[20px] sm:flex-row flex-col flex items-end justify-between gap-4">
            <div className="grid gap-4 w-full">
              <Button
                icon={<img src={arrowIcon} />}
                type="text"
                className="bg-white w-fit text-black shadow-sm rounded-xl py-5 border-solid border-lightBlue"
              >
                Back to companies
              </Button>
              <img src={companyLogo} />
              <Flex
                align="center"
                gap={16}
                className="sm:justify-start justify-between"
              >
                <Typography className="sm:text-[32px] text-lg font-bold text-dark">
                  WebResume
                </Typography>
                <Button
                  icon={<img src={link} />}
                  disabled
                  className="bg-white  shadow-sm rounded-xl h-[34px] border-solid !border-lightBlue !text-grayishBlue"
                >
                  Open Website
                </Button>
              </Flex>
            </div>
            <Button
              type="text"
              className="bg-brightBlue text-white rounded-xl h-[34px] py-2 px-8 w-full sm:w-fit"
            >
              Create a Job Alert
            </Button>
          </div>
          <div className=" bg-lightGray p-4 border border-solid border-lightBlue rounded-[20px] grid gap-4">
            <Typography className="text-dark font-bold text-base">
              Company Description
            </Typography>
            <Typography className="text-grayishBlue font-normal text-sm">
              CV Social Platform, Since 2025
            </Typography>
            <Typography className="text-grayishBlue font-normal text-sm">
              Webresume is a modern platform that lets users create sleek,
              customizable online resumes with shareable links. It blends
              personal branding with professional networking—helping individuals
              showcase their skills, experience, and testimonials all in one
              place. Built for the digital age, Webresume makes standing out
              easy.
            </Typography>
          </div>
        </div>
        <div>
          <Typography className="text-2xl font-bold mb-5">Vacancies</Typography>{" "}
          <VacanciesTable />
        </div>
      </div>
    </ConfigProvider>
  );
}

export default App;
