// App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DepositeCalculator from "./pages/DepositCalculator";
import SavingsCalculator from "./pages/SavingsCalculator";

// 1. 페이지 컴포넌트들

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/deposit" element={<DepositeCalculator />} />
        <Route path="/savings" element={<SavingsCalculator />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;