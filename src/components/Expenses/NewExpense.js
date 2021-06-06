import { useState } from "react";
import Card from "../UI/Card";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ onSaveNewExpense }) => {
  const [isAdding, setIsAdding] = useState(false);

  const startAddingHandler = () => {
    setIsAdding(true);
  };

  const stopAddingHandler = () => {
    setIsAdding(false);
  };

  return (
    <Card className="new-expense">
      {isAdding && (
        <ExpenseForm
          onSaveNewExpense={onSaveNewExpense}
          stopAddingHandler={stopAddingHandler}
        />
      )}
      {!isAdding && (
        <button type="button" onClick={startAddingHandler}>
          Add Expense
        </button>
      )}
    </Card>
  );
};

export default NewExpense;
