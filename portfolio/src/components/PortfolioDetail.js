import React from 'react';

const PortfolioDetailPage = (props) => (
    <div>
        Portfolio Detail Page - { props.match.params.id }
    </div>
);

export default PortfolioDetailPage;


