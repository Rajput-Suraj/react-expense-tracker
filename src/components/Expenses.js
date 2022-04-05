import React from "react";
import ExpenseItem from "./ExpenseItem";

import "./Expenses.css";

const Expenses = ({ data }) => {
    return (
        <>
            {data.map((item) => (
                <ExpenseItem
                    key={item.id}
                    title={item.title}
                    amount={item.amount}
                    date={item.date}
                />
            ))}
        </>
    );
};

export default Expenses;
