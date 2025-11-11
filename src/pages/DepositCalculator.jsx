import { useEffect, useState } from "react";
import Title from "../components/Title";
import "../css/DepositCalculator.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DepositCalculatorInfo from "./DepositCalculatorInfo";
import DepositCalculatorResult from "./DepositCalculatorResult";
import { flushSync } from "react-dom";
import Category from "../components/Category";

function DepositCalculator() {
  // 입력 항목
  const [deposit, setDeposit] = useState(0);
  const [depositTerm, setDepositTerm] = useState(0);
  const [interestRate, setInterestRate] = useState(0);

  // 출력 항목
  const [principalAmount, setPrincipalAmount] = useState(0);
  const [preTaxInterest, setPreTaxInterest] = useState(0);
  const [afterTaxInterest, setAfterTaxInterest] = useState(0);

  
  const increaseDeposit = (variable) => {
    const changedVal = variable.target.value;

    if (changedVal[0] == "+") {
      // 버튼 눌러 결정할 경우
      setDeposit(deposit + Number(changedVal));
    } else if (!isNaN(changedVal)) {
      // 직접 입력
      setDeposit(Number(changedVal));
    } else {
      // 정정
      setDeposit(0);
    }
  };

  const increaseTerm = (variable) => {
    const changedVal = variable.target.value;

    if (changedVal[0] == "+") {
      // 버튼 눌러 결정할 경우
      setDepositTerm(depositTerm + Number(changedVal));
    } else if (!isNaN(changedVal)) {
      // 직접 입력
      setDepositTerm(Number(changedVal));
    } else {
      // 정정
      setDepositTerm(0);
    }
  };

  const increaseRate = (variable) => {
    const changedVal = variable.target.value;

    if (changedVal[0] == "+") {
      // 버튼 눌러 결정할 경우
      setInterestRate(interestRate + Number(changedVal));
    } else if (!isNaN(changedVal)) {
      // 직접 입력
      setInterestRate(Number(changedVal));
    } else {
      // 정정
      setInterestRate(0);
    }
  };

  useEffect(() => {
    var rate = interestRate * 0.01 / 12; // 연 이율 
    var resultPreRate = principalAmount * depositTerm * rate;
    var resultAfterRate = resultPreRate * 0.846;

    resultPreRate = Math.round(resultPreRate);
    resultAfterRate = Math.round(resultAfterRate);

    setPrincipalAmount(deposit);
    setPreTaxInterest(resultPreRate);
    setAfterTaxInterest(resultAfterRate);
  }, [deposit, depositTerm, interestRate]);

  return (
    <div className="depo-frame">
      <Category active='deposit' />
      <Title title={`예금`} />
      <div className="depo-contents">
        <div className="depo-content">
          <DepositCalculatorInfo 
            deposit={deposit}
            depositTerm={depositTerm}
            interestRate={interestRate}
            increaseDeposit={increaseDeposit}
            increaseTerm={increaseTerm}
            increaseRate={increaseRate}
          />
          <DepositCalculatorResult
            principalAmount={principalAmount}
            preTaxInterest={preTaxInterest}
            afterTaxInterest={afterTaxInterest}
          />
        </div>
      </div>
    </div>
  );
}

export default DepositCalculator;
