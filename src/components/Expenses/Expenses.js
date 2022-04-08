import React, { useState } from "react";

import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

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
            <ExpensesList list={filteredExpenses} year={year} />
        </div>
    );
};

export default Expenses;
