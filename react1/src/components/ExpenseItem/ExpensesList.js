import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  let expenseContnet = (
    <p className="expenses-list__fallback"> No expense found.!!</p>
  );
  if (props.items.length > 0) {
    expenseContnet = props.items.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }
  return expenseContnet;
};
export default ExpensesList;
