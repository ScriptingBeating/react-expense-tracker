import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = ({ items }) => {
  if (items.length <= 0) {
    return <h2 className="expenses-list__fallback">No Results Found.</h2>;
  }

  return (
    <ul className="expenses-list">
      {items.map((expense) => (
        <li key={expense.id}>
          <ExpenseItem
            date={expense.date}
            title={expense.title}
            price={expense.amount}
          />
        </li>
      ))}
    </ul>
  );
};

export default ExpensesList;
