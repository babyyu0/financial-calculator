import { useEffect, useState } from "react";
import Title from "../components/Title";
import "../css/SavingsCalculator.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SavingsCalculatorInfo from "./SavingsCalculatorInfo";
import SavingsCalculatorResult from "./SavingsCalculatorResult";
import Category from "../components/Category";

function SavingsCalculator() {
  // 입력 항목
  const [savings, setSavings] = useState(0);
  const [savingsTerm, setSavingsTerm] = useState(0);
  const [interestRate, setInterestRate] = useState(0);

  // 출력 항목
  const [principalAmount, setPrincipalAmount] = useState(0);
  const [preTaxInterest, setPreTaxInterest] = useState(0);
  const [afterTaxInterest, setAfterTaxInterest] = useState(0);
  const [taxArr, setTaxArr] = useState([]);

  const increaseSavings = (variable) => {
    const changedVal = variable.target.value;

    if (changedVal[0] == "+") {
      // 버튼 눌러 결정할 경우
      setSavings(savings + Number(changedVal));
    } else if (!isNaN(changedVal)) {
      // 직접 입력
      setSavings(Number(changedVal));
    } else {
      // 정정
      setSavings(0);
    }
  };

  const increaseTerm = (variable) => {
    const changedVal = variable.target.value;

    if (changedVal[0] == "+") {
      // 버튼 눌러 결정할 경우
      setSavingsTerm(savingsTerm + Number(changedVal));
    } else if (!isNaN(changedVal)) {
      // 직접 입력
      setSavingsTerm(Number(changedVal));
    } else {
      // 정정
      setSavingsTerm(0);
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
    var resultPreTaxInterest = 0; // 만기 시 가져갈 이자
    const interest = (interestRate * 0.01) / savingsTerm;
    const resultTaxArr = [];

    for (var i = savingsTerm; i >= 1; --i) {
      resultTaxArr.push(savings * interest * i);
      resultPreTaxInterest += savings * interest * i;
    }

    setPrincipalAmount(savings);
    setTaxArr(resultTaxArr);
    setPreTaxInterest(resultPreTaxInterest);
    setAfterTaxInterest(resultPreTaxInterest * 0.846);
  }, [savings, savingsTerm, interestRate]);

  return (
    <div className="saving-frame">
      <Category active="savings" />
      <Title title={`적금`} />
      <div className="saving-contents">
        <div className="saving-content">
          <SavingsCalculatorInfo
            savings={savings}
            savingsTerm={savingsTerm}
            interestRate={interestRate}
            increaseSavings={increaseSavings}
            increaseTerm={increaseTerm}
            increaseRate={increaseRate}
          />
          <SavingsCalculatorResult
            principalAmount={principalAmount}
            preTaxInterest={preTaxInterest}
            afterTaxInterest={afterTaxInterest}
          />
        </div>
      </div>
    </div>
  );
}

export default SavingsCalculator;
