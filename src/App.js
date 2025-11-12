import "./index.css";
import { ConfigProvider } from "antd";
import { antdOverride } from "./ant-design";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <ConfigProvider theme={antdOverride}>
      <div className="container md:px-0 px-4 mb-6">
        <HomePage />
      </div>
    </ConfigProvider>
  );
}

export default App;
