import { useState } from "react";
import Title from "../components/Title";
import "../css/SavingsCalculator.css";
import "bootstrap/dist/css/bootstrap.min.css";

function SavingsCalculatorInfo({
  savings,
  savingsTerm,
  interestRate,
  increaseSavings,
  increaseTerm,
  increaseRate,
}) {
  return (
    <div className="saving-infos">
      <div className="saving-info">
        <div>월 납입금</div>
        <input type="number" className="form-control" value={savings} onChange={increaseSavings} />
        <div>원</div>
      </div>
      <div className="saving-hint">
        <button
          type="button"
          className="btn btn-outline-secondary"
          value="+100000"
          onClick={increaseSavings}
        >
          +10만원
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary"
          value="+300000"
          onClick={increaseSavings}
        >
          +30만원
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary"
          value="+500000"
          onClick={increaseSavings}
        >
          +50만원
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary"
          value="+1000000"
          onClick={increaseSavings}
        >
          +100만원
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary"
          value="0"
          onClick={increaseSavings}
        >
          정정
        </button>
      </div>
      <div className="saving-info">
        <div>적립 개월</div>
        <input type="number" className="form-control" value={savingsTerm} onChange={increaseTerm} />
        <div>개월</div>
      </div>
      <div className="saving-hint">
        <button
          type="button"
          className="btn btn-outline-secondary"
          value="+3"
          onClick={increaseTerm}
        >
          +3개월
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary"
          value="+6"
          onClick={increaseTerm}
        >
          +6개월
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary"
          value="+12"
          onClick={increaseTerm}
        >
          +12개월
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary"
          value="+24"
          onClick={increaseTerm}
        >
          +24개월
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary"
          value="0"
          onClick={increaseTerm}
        >
          정정
        </button>
      </div>
      <div className="saving-info">
        <div>적용금리</div>
        <input
          type="number"
          className="form-control"
          value={interestRate}
          onChange={increaseRate}
        />
        <div>%</div>
      </div>
    </div>
  );
}

export default SavingsCalculatorInfo;
