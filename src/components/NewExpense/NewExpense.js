import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import "./ExpenseForm.css";

const NewExpense = ({ onAddExpense }) => {
    const [addExpense, setAddExpense] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            // This Math function cCan generate same id again
            id: Math.random().toString(),
        };
        onAddExpense(expenseData);
    };

    const handleCancelOperation = () => {
        setAddExpense(!addExpense);
    };

    return (
        <div className="new-expense">
            {addExpense ? (
                <ExpenseForm
                    onSaveExpenseData={saveExpenseDataHandler}
                    cancelAddOperation={handleCancelOperation}
                />
            ) : (
                <>
                    <div className="new-expense__actions-add">
                        <button onClick={() => setAddExpense(true)}>
                            Add New Expense
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default NewExpense;
