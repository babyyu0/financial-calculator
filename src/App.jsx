// App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DepositeCalculator from "./pages/DepositCalculator";

// 1. 페이지 컴포넌트들

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/deposit" element={<DepositeCalculator />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;