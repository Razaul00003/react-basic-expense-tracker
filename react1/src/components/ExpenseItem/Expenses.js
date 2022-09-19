import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2012");
  const expenses = props.data;
  const filterChangeHandler = (year) => {
    console.log(
      "its from expense.js after lifting up value",
      year,
      filteredYear
    );
    setFilteredYear(year);
  };
  return (
    <div>
      <ExpensesFilter
        selected={filteredYear}
        onChangeYear={filterChangeHandler}
      />
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}
export default Expenses;
