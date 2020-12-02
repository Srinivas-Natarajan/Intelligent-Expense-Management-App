import React from 'react';
import Option from './Option';


const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleRemoveAll}>Remove All Items</button>
            {/*<ol>*/}
            {props.options.length === 0 && <p>Please enter your options!</p>}
            {
                props.options.map((item) => {
                    return <Option
                        key={item}
                        option={item}
                        handleRemoveOption={props.handleRemoveOption}
                    />;
                })
            }
            {/*</ol>*/}
        </div>
    );
}

export default Options;