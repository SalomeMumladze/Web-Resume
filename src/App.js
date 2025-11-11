import "./index.css";
import { Button, Flex, Typography, Menu } from "antd";
import { ConfigProvider } from "antd";
import { antdOverride } from "./ant-design";

function App() {
  const items = [
    {
      key: "home",
      label: "Home",
    },
    {
      key: "vacancies",
      label: "Vacancies",
    },
    {
      key: "companies",
      label: "Companies",
    },
    {
      key: "resume-feed",
      label: "Resume Feed",
    },
  ];
  return (
    <ConfigProvider theme={antdOverride}>
      <div className="fixed top-4 right-0 left-0 bg-lightGray p-4 text-center border border-solid border-lightBlue h-16 rounded-[20px] container">
        <Flex align="center" className="h-full h-full" justify="space-between">
          <Typography className="font-SfProBlackItalic  text-base">
            WebResume
          </Typography>

          <Menu
            mode="horizontal"
            items={items}
            className="!p-0 gap-6 bg-transparent border-none text-grayishBlue text-sm font-normal text-SfProRegular w-1/3 flex justify-center"
          />

          <Flex align="center" gap={10}>
            <Button
              type="text"
              className="bg-lightPastelBlue text-brightBlue border border-solid border-pastelBlue rounded-xl w-32 h-[34px] py-2 px-8"
            >
              Log In
            </Button>
            <Button
              type="text"
              className="bg-brightBlue text-white rounded-xl w-32 h-[34px] py-2 px-8"
            >
              Register
            </Button>
          </Flex>
        </Flex>
      </div>
    </ConfigProvider>
  );
}

export default App;
