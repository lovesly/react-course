import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        Getting Lost...
        <Link to="/">Go home</Link>
    </div>
);

export default NotFoundPage;