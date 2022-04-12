import React, { useState } from "react";

import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = ({ data }) => {
    const [year, setYear] = useState("2022");

    const filterChangeHandler = (year) => {
        setYear(year);
    };

    const filteredExpenses = data.filter(
        (expense) => expense.date.getFullYear().toString() === year
    );

    return (
        <div className="expenses">
            <ExpensesFilter onYearChange={filterChangeHandler} year={year} />
            <ExpenseChart expenses={filteredExpenses} />
            <ExpensesList list={filteredExpenses} year={year} />
        </div>
    );
};

export default Expenses;
