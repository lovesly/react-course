import React from 'react';

const EditPage = (props) => {
    console.log(props);
    return (
        // what if I want an optional id, and a default edit page??
        <div>
            Editing the expense with id of { props.match.params.id }
        </div>
    );
};

export default EditPage;