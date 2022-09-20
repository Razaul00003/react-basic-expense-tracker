import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [formShow, setFormShow] = useState(false);
  const SaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setFormShow(false);
  };
  const changeFormStatus = () => setFormShow(true);

  return (
    <div className="new-expense">
      {!formShow ? (
        <button onClick={changeFormStatus}> Add a New Expense </button>
      ) : (
        <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} />
      )}
    </div>
  );
};
export default NewExpense;
