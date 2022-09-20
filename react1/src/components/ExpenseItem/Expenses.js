import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2019");
  const filterChangeHandler = (year) => {
    setFilteredYear(year);
  };
  const filteredItems = props.data.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <div>
      <ExpensesFilter
        selected={filteredYear}
        onChangeYear={filterChangeHandler}
      />

      {filteredItems.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
}
export default Expenses;
