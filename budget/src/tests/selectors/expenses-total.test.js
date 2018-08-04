import expenses from '../fixtures/expenses';
import totalExpenseSelector from '../../selectors/expenses-total';

test(`should return 0 if no expenses`, () => {
    const total = totalExpenseSelector([]);
    expect(total).toBe(0);
});

test(`should return the total expense`, () => {
    const total = totalExpenseSelector(expenses);
    expect(total).toBe(6200);
});