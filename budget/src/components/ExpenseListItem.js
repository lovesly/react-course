import React from 'react';
import { Link } from 'react-router-dom';

// where the fuck does dispatch come from?
const ExpenseListItem = ({ description, amount, createdAt, id }) => (
    <div>
        <Link to={ `/edit/${ id }` }>
            <h3>{ description }</h3>
        </Link>
        <p>{ amount } - { createdAt }</p>
        <button onClick={() => {
            // what if I don't want to use link, I just like an edit button??? 
            // how can I access router here???
        }}>Edit</button>
    </div>
);

// if no mapStateToProps, how can we pass the params??
export default ExpenseListItem;




