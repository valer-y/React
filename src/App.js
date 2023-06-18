// import ExpenseItem from "./components/ExpenseItem";
import React, { useState} from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NexExpense/NewExpense";

const INITIAL_EXPENSES = [
    {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2023, 6, 14),
    },
    {id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12)},
    {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2023, 2, 28),
    },
    {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2023, 5, 12),
    },
];

const App = () => {
    const [expenses, setExpenses] = useState(INITIAL_EXPENSES);
    
    const addExpenseHandler = (expense) => {
        setExpenses((prevExpenses) => {
            return [expense, ...prevExpenses]
        });
        console.log(expense);
    }

    return (<div>
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses item={expenses} />
    </div>);
}

export default App;
