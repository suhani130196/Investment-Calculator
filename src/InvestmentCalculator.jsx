import { useState } from "react";
import InvestmentTable from "./Investmenttable";

const InvestmentCalculator = ({ onChange }) => {
  const [initialInvest, setInitialInvestment] = useState(0);
  const [annualInvest, setAnnualInvestment] = useState(0);
  const [expectedReturn, setExpectedReturn] = useState(0);
  const [duration, setDuration] = useState(null);

  const inputIsValid = duration == null || duration >= 1;
  return (
    <div>
      <div className="input-container">
        <p>
          <label className="label">Initial Investment:</label>
          <input
            className="inputBox"
            type="text"
            onChange={(e) => {
              setInitialInvestment(parseInt(e.target.value));
            }}
          ></input>
        </p>

        <label className="label">Annual Investment:</label>
        <input
          className="inputBox"
          type="text"
          onChange={(e) => setAnnualInvestment(parseInt(e.target.value))}
        ></input>

        <label className="label">Expected Return:</label>
        <input
          className="inputBox"
          type="text"
          onChange={(e) => setExpectedReturn(parseInt(e.target.value))}
        ></input>

        <label className="label">Duration:</label>
        <input
          className="inputBox"
          type="text"
          onChange={(e) => {
            if (e.target.value == "") {
              setDuration(null);
            } else {
              setDuration(parseInt(e.target.value));
            }
          }}
        ></input>
      </div>
      {!inputIsValid && <p>Please enter valid duration.</p>}
      {inputIsValid && (
        <InvestmentTable
          initialInvest={initialInvest}
          annualInvest={annualInvest}
          duration={duration}
          expectedReturn={expectedReturn}
        />
      )}
    </div>
  );
};

export default InvestmentCalculator;

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "INR",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
