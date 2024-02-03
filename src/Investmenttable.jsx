import { useEffect, useState } from "react";
import { formatter } from "./InvestmentCalculator";

const InvestmentTable = ({
  initialInvest,
  annualInvest,
  duration,
  expectedReturn,
}) => {
  const [annualData, setAnnualData] = useState([]);
  function getRows() {
    setAnnualData([]);
    console.log("get rows called with initialInvest: " + initialInvest);
    let interestPerYear = 0;
    let investmentValue = initialInvest;
    let investedCapital = initialInvest;
    let totalInterest = interestPerYear;
    for (let i = 0; i < duration; i++) {
      console.log("For loop run");
      interestPerYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestPerYear + annualInvest;
      investedCapital = investedCapital + annualInvest;
      totalInterest = totalInterest + interestPerYear;

      let investedCapitalCopy = investedCapital;
      let investmentValueCopy = investmentValue;
      let interestPerYearCopy = interestPerYear;
      let totalInterestCopy = totalInterest;
      setAnnualData((prevState) => [
        ...prevState,
        {
          year: i + 1,
          investmentValue: investmentValueCopy,
          interestPerYear: interestPerYearCopy,
          totalInterest: totalInterestCopy,
          investedCapital: investedCapitalCopy,
        },
      ]);
      console.log("invested capital from here" + investedCapital);
      console.log(annualData);
    }
  }
  useEffect(() => {
    getRows();
    console.log(annualData);
  }, [initialInvest, annualInvest, duration, expectedReturn]);
  return (
    <div>
      <ul>
        <table className="table">
          <tr>
            <th>Year</th>
            <th>Investment value</th>
            <th>Intrest(year)</th>
            <th>Total interest</th>
            <th>Invested capital</th>
          </tr>

          {annualData.map((object) => (
            <tr key={formatter.format(object.year)}>
              <td>{object.year}</td>
              <td>{formatter.format(object.investmentValue)}</td>
              <td>{formatter.format(object.interestPerYear)}</td>
              <td>{formatter.format(object.totalInterest)}</td>
              <td>{formatter.format(object.investedCapital)}</td>
            </tr>
          ))}
          <tr></tr>
        </table>
      </ul>
    </div>
  );
};

export default InvestmentTable;
