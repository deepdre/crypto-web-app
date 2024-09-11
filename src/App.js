import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DashboardPage from "./pages/Dashboard";
import HomePage from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
