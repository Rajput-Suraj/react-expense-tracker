import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";

import "./Expenses.css";
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
            {filteredExpenses.map((item) => (
                <ExpenseItem
                    key={item.id}
                    title={item.title}
                    amount={item.amount}
                    date={item.date}
                />
            ))}
        </div>
    );
};

export default Expenses;
