// get total expenses
export default (expenses) => {
    return expenses.reduce((accumulator, curEl) => accumulator + curEl.amount, 0);
};