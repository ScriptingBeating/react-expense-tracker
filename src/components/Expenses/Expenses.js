import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import Chart from "../Chart/Chart";

const Expenses = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const dataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = items.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  for (const expense of filteredExpenses) {
    const expenseMonth = expense.date.getMonth();
    dataPoints[expenseMonth].value += expense.amount;
  }

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <Chart dataPoints={dataPoints} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
