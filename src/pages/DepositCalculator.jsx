import { useState } from "react";
import Title from "../components/Title";
import "../css/DepositCalculator.css";
import "bootstrap/dist/css/bootstrap.min.css";

function DepositCalculator() {
  // 입력 항목
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [paymentMonths, setPaymentMonths] = useState(0);
  const [interestRate, setInterestRate] = useState(0);


  // 출력 항목
  const [principalAmount, setPrincipalAmount] = useState(0);

  const increaseMonthlyPayment = (variable) => {
    const changedVal = variable.target.value;

    if(changedVal[0] == '+') { // 버튼 눌러 결정할 경우
      setMonthlyPayment(monthlyPayment + Number(variable.target.value));
    } else if(!isNaN(changedVal)) { // 직접 입력
      setMonthlyPayment(Number(variable.target.value));
    } else { // 장장
      setMonthlyPayment(0);
    }
  };

  const increaseMonth = (variable) => {
    const increasedVal = variable.target.value;
    if (increasedVal == 0) {
      setPaymentMonths(0);
      return;
    } else {
      setPaymentMonths(interestRate + Number(variable.target.value));
    }
  };

  const increaseRate = (variable) => {
    const increasedVal = variable.target.value;
    if (increasedVal == 0) {
      setInterestRate(0);
      return;
    } else {
      setInterestRate(setInterestRate + Number(variable.target.value));
    }
  };

  const calculate = () => {

  }

  return (
    <div className="depo-frame">
      <Title title={`예금`} />
      <div className="depo-contents">
        <div className="depo-content">
            <div className="depo-infos">
            <div className="depo-info">
              <div>예치금</div>
              <input type="number" className="form-control" value={monthlyPayment} onChange={increaseMonthlyPayment} />
              <div>￦</div>
            </div>
            <div className="depo-hint">
              <button type="button" className="btn btn-outline-secondary" value="+1000000" onClick={increaseMonthlyPayment}>
                +100만원
              </button>
              <button type="button" className="btn btn-outline-secondary" value="+5000000" onClick={increaseMonthlyPayment}>
                +500만원
              </button>
              <button type="button" className="btn btn-outline-secondary" value="+10000000" onClick={increaseMonthlyPayment}>
                +1000만원
              </button>
              <button type="button" className="btn btn-outline-secondary" value="+50000000" onClick={increaseMonthlyPayment}>
                +5000만원
              </button>
              <button type="button" className="btn btn-outline-secondary" value="0" onClick={increaseMonthlyPayment}>
                정정
              </button>
            </div>
            <div className="depo-info">
              <div>납입 개월</div>
              <input type="number" className="form-control" value={paymentMonths} onChange={increaseMonth} />
              <div>개월</div>
            </div>
            <div className="depo-hint">
              <button type="button" className="btn btn-outline-secondary" value="+3" onClick={increaseMonth}>
                +3개월
              </button>
              <button type="button" className="btn btn-outline-secondary" value="+6" onClick={increaseMonth}>
                +6개월
              </button>
              <button type="button" className="btn btn-outline-secondary" value="+12" onClick={increaseMonth}>
                +12개월
              </button>
              <button type="button" className="btn btn-outline-secondary" value="+24" onClick={increaseMonth}>
                +24개월
              </button>
              <button type="button" className="btn btn-outline-secondary" value="+0" onClick={increaseMonth}>
                정정
              </button>
            </div>
            <div className="depo-info">
              <div>적용금리</div>
              <input type="number" className="form-control" value={interestRate} onChange={increaseRate} />
              <div>%</div>
            </div>
            <div className="depo-summit">
              <button type="button" className="btn btn-success" onClick={calculate}>
                계산하기
              </button>
            </div>
          </div>
          <div className="depo-results">
            <div className="depo-result">
              <div>예치금</div>
              <div>{principalAmount}</div>
              <div>￦</div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default DepositCalculator;
