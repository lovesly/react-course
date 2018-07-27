// get visible expenses
export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((el) => {
        let startMatch = typeof startDate === 'number' ? el.createdAt >= startDate : true;
        let endMatch = typeof endDate !== 'number' || el.createdAt <= endDate;
        // tricky, multiple text filters?
        // includes function, allows parcial search
        let textMatch = el.description.toLowerCase().includes(text.toLowerCase());
        return startMatch && endMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            // consider undefined?
            return a.createdAt - b.createdAt;
        } else if (sortBy === 'amount') {
            return a.amount - b.amount;
        }
    });
};