import React from 'react';

const EditExpensePage = (props) => (
    <div>
        {console.log(props)}
        <p>This is a Editing Component</p>
        <p>ID: {props.match.params.id}</p>
    </div>
);

export default EditExpensePage;