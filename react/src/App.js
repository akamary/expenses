import React, { useState } from "react";

import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2021, 10, 2),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 10, 1),
  },
  {
    id: "e3",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2021, 10, 2),
  },
  {
    id: "e4",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 10, 1),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
