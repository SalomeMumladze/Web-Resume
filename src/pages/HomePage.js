import { Button, Flex, Typography, Menu, Dropdown } from "antd";
import arrowIcon from "assets/arrow.svg";
import companyLogo from "assets/company-logo.svg";
import link from "assets/link.svg";
import { MenuOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import JobListingTable from "components/JobListingTable";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
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
    <div className="container md:px-0 px-4 mb-6">
      <div className="sm:h-24 h-32 mb-2">
        <div className="fixed z-50 container md:top-4 top-0  right-0 left-0 bg-lightGray p-4 text-center border border-solid border-lightBlue sm:h-16 md:rounded-[20px]">
          <div className="items-center h-full justify-between sm:flex grid grid-cols-2 gap-2">
            <Typography className="font-SfProBlackItalic text-base mr-auto sm:m-0">
              WebResume
            </Typography>

            {isMobile ? (
              <Dropdown overlay={menu} trigger={["click"]} className="ml-auto">
                <Button icon={<MenuOutlined />} />
              </Dropdown>
            ) : (
              <Menu
                mode="horizontal"
                items={items}
                className="!p-0 gap-6 bg-transparent border-none text-grayishBlue text-sm font-normal text-SfProRegular w-1/3 flex justify-center"
              />
            )}

            <div className="tems-center flex gap-[10px] col-span-2 justify-between">
              <Button
                type="text"
                className="bg-lightPastelBlue text-brightBlue border border-solid border-pastelBlue rounded-xl sm:w-32 w-full h-[34px]  sm:py-2 sm:px-8"
                onClick={() => navigate("/login")}
              >
                Log In
              </Button>
              <Button
                type="text"
                className="bg-brightBlue text-white rounded-xl sm:w-32 w-full  h-[34px] sm:py-2 sm:px-8"
                onClick={() => navigate("/register")}
              >
                Register
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid gap-5">
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
              className="sm:justify-start justify-between flex-wrap sm:gap-4 gap-2"
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
            customizable online resumes with shareable links. It blends personal
            branding with professional networking—helping individuals showcase
            their skills, experience, and testimonials all in one place. Built
            for the digital age, Webresume makes standing out easy.
          </Typography>
        </div>
      </div>
      <div>
        <Typography className="text-2xl font-bold mb-5 mt-7">
          Vacancies
        </Typography>{" "}
        <JobListingTable />
      </div>
    </div>
  );
}

export default HomePage;
