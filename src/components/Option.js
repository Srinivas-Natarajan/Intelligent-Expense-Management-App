import React from 'react';


const Option = (props) => {
    return (
        <div>
            {/*<li>*/}{props.option}{/*</li>*/}
            <button
                onClick={(e) => { props.handleRemoveOption(props.option); }}>
                Remove
            </button>
        </div>
    );
}

export default Option;
