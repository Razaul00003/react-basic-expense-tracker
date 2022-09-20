import React from "react";
import Chart from "../Chart/Chart";

const ExpenseChart = (props) => {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sept", value: 0 },
    { label: "Act", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];
  for (const expense in props.expenses) {
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[expenseMonth] = chartDataPoints[expenseMonth].value +=
      expense.amount;
  }
  return <Chart dataPoints={chartDataPoints} />;
};
export default ExpenseChart;