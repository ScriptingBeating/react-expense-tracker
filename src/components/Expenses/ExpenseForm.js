import { useState } from "react";

const ExpenseForm = ({ onSaveNewExpense, stopAddingHandler }) => {
  const [expense, setExpense] = useState({
    title: "",
    amount: 0,
    date: "",
  });

  const onChangeHandler = ({ target }) => {
    setExpense((prevState) => {
      return {
        ...prevState,
        [target.id]: target.id === "amount" ? +target.value : target.value,
      };
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    onSaveNewExpense(expense);
    setExpense({
      title: "",
      amount: 0,
      date: "",
    });
    stopAddingHandler();
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={expense.title}
            onChange={onChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            min="0.1"
            step="0.1"
            id="amount"
            value={expense.amount}
            onChange={onChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Amount</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            step="0.1"
            id="date"
            value={expense.date}
            onChange={onChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={stopAddingHandler}>
          Cancel
        </button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
