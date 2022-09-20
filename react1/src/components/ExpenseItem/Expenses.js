import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";

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
      <ExpensesList items={filteredItems} />
    </div>
  );
}
export default Expenses;
