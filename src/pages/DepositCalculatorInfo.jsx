import { useState } from "react";
import Title from "../components/Title";
import "../css/DepositCalculator.css";
import "bootstrap/dist/css/bootstrap.min.css";

function DepositCalculatorInfo({
  deposit,
  depositTerm,
  interestRate,
  increaseDeposit,
  increaseTerm,
  increaseRate,
  calculate,
}) {
  return (
    <div className="depo-infos">
      <div className="depo-info">
        <div>예치금</div>
        <input type="number" className="form-control" value={deposit} onChange={increaseDeposit} />
        <div>원</div>
      </div>
      <div className="depo-hint">
        <button
          type="button"
          className="btn btn-outline-secondary"
          value="+1000000"
          onClick={increaseDeposit}
        >
          +100만원
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary"
          value="+5000000"
          onClick={increaseDeposit}
        >
          +500만원
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary"
          value="+10000000"
          onClick={increaseDeposit}
        >
          +1000만원
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary"
          value="+50000000"
          onClick={increaseDeposit}
        >
          +5000만원
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary"
          value="0"
          onClick={increaseDeposit}
        >
          정정
        </button>
      </div>
      <div className="depo-info">
        <div>유치 개월</div>
        <input type="number" className="form-control" value={depositTerm} onChange={increaseTerm} />
        <div>개월</div>
      </div>
      <div className="depo-hint">
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
      <div className="depo-info">
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

export default DepositCalculatorInfo;
