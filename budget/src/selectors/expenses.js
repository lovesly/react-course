import moment from 'moment';

// get visible expenses
export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((el) => {
        const createdAt = moment(el.createdAt);
        let startMatch = startDate ? startDate.isSameOrBefore(createdAt, 'day') : true;
        let endMatch = endDate ? endDate.isSameOrAfter(createdAt, 'day') : true;
        // tricky, multiple text filters?
        // includes function, allows parcial search
        let textMatch = el.description.toLowerCase().includes(text.toLowerCase());
        return startMatch && endMatch && textMatch;
    }).sort((a, b) => {
        // what if I want to add a flag to indicate the decreasing order?
        if (sortBy === 'date') {
            // consider undefined?
            return a.createdAt - b.createdAt;
        } else if (sortBy === 'amount') {
            return a.amount - b.amount;
        }
    });
};