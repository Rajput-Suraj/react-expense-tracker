import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
    const [userInput, setUserInput] = useState({
        title: "",
        amount: "",
        date: "",
    });

    const titleChangeHandler = (e) => {
        setUserInput({
            ...userInput,
            title: e.target.value,
        });
    };

    const amountChangeHandler = (e) => {
        setUserInput({
            ...userInput,
            amount: e.target.value,
        });
    };

    const dateChangeHandler = (e) => {
        setUserInput({
            ...userInput,
            date: e.target.value,
        });
    };

    const submitHandler = (e) => {
        console.log("Before DATA", userInput);
        const expenseData = {
            ...userInput,
            date: new Date(userInput.date),
        };
        console.log("After DATA", expenseData);
        e.preventDefault();
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.0"
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        min="2022-01-01"
                        max="2022-12-31"
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
