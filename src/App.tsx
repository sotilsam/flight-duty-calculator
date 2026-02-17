import { Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import MainPage from "./main-page";
import Explanations from "./Explanations";
import Logo from './assets/Airplane-Logo.png';


export default function App() {
  return (
    <div className="app-layout">
      <Sidebar />

      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>

      <div className="content">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/explanations" element={<Explanations />} />
        </Routes>
      </div>
    </div>
  );
}
