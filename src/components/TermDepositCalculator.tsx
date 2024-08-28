import React, { useState } from "react";
import { calculateTermDeposit } from "../utils/calculateTermDeposit";
import "./TermDepositCalculator.css";
import { InputField } from "./InputField";

type InterestPaidType = "monthly" | "quarterly" | "annually" | "atMaturity";

const TermDepositCalculator: React.FC = () => {
  const [startDepositAmount, setStartDepositAmount] = useState<
    number | undefined
  >();
  const [interestRate, setInterestRate] = useState<number | undefined>();
  const [investmentTerm, setInvestmentTerm] = useState<number | undefined>();
  const [interestPaid, setInterestPaid] = useState<
    InterestPaidType | undefined
  >();
  const [finalBalance, setFinalBalance] = useState<number | undefined>();
  const [error, setError] = useState<string | undefined>();

  function handleCalculateButtonClick() {
    setError(undefined);
    try {
      const result = calculateTermDeposit(
        startDepositAmount,
        interestRate,
        investmentTerm,
        interestPaid
      );

      setFinalBalance(result);
    } catch (e: any) {
      setError(e.message);
    }
  }

  return (
    <div className="main">
      <div className="container">
        <div className="image-container">
          <img src="./UP-MEDIA-LOGO-LIGHT.png" alt="up-logo" height={100} />
        </div>
        <h1 className="heading">Term Deposit Calculator</h1>
        <div className="inputs-container">
          <InputField
            label="Start Deposit Amount ($)"
            value={startDepositAmount}
            onChange={setStartDepositAmount}
          />
          <InputField
            label="Interest Rate (%)"
            value={interestRate}
            onChange={setInterestRate}
          />
          <InputField
            label="Investment Term (years)"
            value={investmentTerm}
            onChange={setInvestmentTerm}
          />
          <div className="select-container">
            <label className="select-label">Interest Paid</label>
            <select
              className="select"
              value={interestPaid}
              onChange={(e) =>
                setInterestPaid(e.target.value as InterestPaidType)
              }
            >
              <option value={undefined}>Select...</option>
              <option value="monthly">Monthly</option>
              <option value="quarterly">Quarterly</option>
              <option value="annually">Annually</option>
              <option value="atMaturity">At Maturity</option>
            </select>
          </div>
        </div>
        <div className="button-container">
          <button className="button" onClick={handleCalculateButtonClick}>
            Calculate
          </button>
        </div>
        {error && (
          <div className="error">
            <p>{error}</p>
          </div>
        )}
        {finalBalance && (
          <div className="final-balance">
            <h1>${finalBalance}</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default TermDepositCalculator;
