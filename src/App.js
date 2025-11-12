import "./index.css";
import { ConfigProvider } from "antd";
import { antdOverride } from "./ant-design";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AccountPage from "./pages/AccountPage";
// import RegisterPage from "./pages/RegisterPage";
// import SetupPage from "./pages/SetupPage";

function App() {
  return (
    <ConfigProvider theme={antdOverride}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<AccountPage />} />
          {/* <Route path="/register" element={<RegisterPage />} />
            <Route path="/setup" element={<SetupPage />} /> */}
        </Routes>
      </Router>
    </ConfigProvider>
  );
}

export default App;
