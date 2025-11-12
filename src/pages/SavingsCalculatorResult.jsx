import { useState } from "react";
import Title from "../components/Title";
import "../css/SavingsCalculator.css";
import "bootstrap/dist/css/bootstrap.min.css";
import avingsCalculatorInfo from "./SavingsCalculatorInfo";

function SavingsCalculatorResult({principalAmount, preTaxInterest, afterTaxInterest}) {
    return (
    <div className="saving-results">
      <div className="saving-result">
        <div>누적 납입금</div>
        <div>{principalAmount.toLocaleString()}</div>
        <div>원</div>
      </div>
      <div className="saving-result">
        <div>세전 이자</div>
        <div>{preTaxInterest.toLocaleString()}</div>
        <div>원</div>
      </div>
      <div className="saving-result">
        <div>세후 이자 (과세 15.4%)</div>
        <div>{afterTaxInterest.toLocaleString()}</div>
        <div></div>원
      </div>
      <hr />
      <div className="saving-result">
        <div><mark>총 수령액</mark></div>
        <div>{(principalAmount + afterTaxInterest).toLocaleString()}</div>
        <div>원</div>
      </div>
    </div>
  );
}

export default SavingsCalculatorResult;
