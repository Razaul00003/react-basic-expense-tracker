import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2019");
  const filterChangeHandler = (year) => setFilteredYear(year);
  const filteredItems = props.data.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <div>
      <ExpensesFilter
        selected={filteredYear}
        onChangeYear={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredItems} />
      <ExpensesList items={filteredItems} />
    </div>
  );
}
export default Expenses;
