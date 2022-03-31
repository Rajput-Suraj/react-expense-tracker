import "./ExpenseItem.css";

const ExpenseItem = () => {
    return (
        <div className="expense-item">
            <div>March 31st 2022</div>
            <div className="expense-item__description">
                <h2>Car Insurance</h2>
                <div className="expense-item__price">$295.5</div>
            </div>
        </div>
    );
};

export default ExpenseItem;
