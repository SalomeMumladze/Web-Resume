import "./index.css";
import { ConfigProvider } from "antd";
import { antdOverride } from "./ant-design";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "pages/HomePage";
import AccountPage from "pages/AccountPage";
import SetupPage from "pages/SetupPage";

function App() {
  return (
    <ConfigProvider theme={antdOverride}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={<AccountPage defaultActive="register" />}
          />
          <Route
            path="/login"
            element={<AccountPage defaultActive="login" />}
          />
          <Route path="/setup" element={<SetupPage />} />
        </Routes>
      </Router>
    </ConfigProvider>
  );
}

export default App;
