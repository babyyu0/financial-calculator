// App.js
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DepositeCalculator from "./pages/DepositCalculator";
import SavingsCalculator from "./pages/SavingsCalculator";
import "./css/App.css"

// 1. 페이지 컴포넌트들

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/deposit" replace={true} />} />
          <Route path="/deposit" element={<DepositeCalculator />} />
          <Route path="/savings" element={<SavingsCalculator />} />
        </Routes>
      </BrowserRouter>
      <div className="footer-frame footer">
        <div>©공_</div>
        <a href={`https://blog.naver.com/from-u0`}>https://blog.naver.com/from-u0</a>
      </div>
    </>
  );
}

export default App;
