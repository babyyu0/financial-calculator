import Category from "./components/Category"
import DepositCalculator from "./pages/DepositCalculator"
import "./css/App.css"

function App() {
  return (
    <div className="app-frame">
      <Category />
      <DepositCalculator/>
    </div>
  )
}

export default App
