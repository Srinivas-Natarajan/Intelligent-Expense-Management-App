import React from 'react';
import Option from './Option';


const Options = (props) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Your Options</h3>
            <button
                className="button button--link"
                onClick={props.handleRemoveAll}>
                Remove All Items
            </button>
        </div>
        {/*<ol>*/}
        {props.options.length === 0 && <p className="widget--para">Please enter your options!</p>}
        {
            props.options.map((item, index) => {
                return <Option
                    key={item}
                    option={item}
                    count={index + 1}
                    handleRemoveOption={props.handleRemoveOption}
                />;
            })
        }
        {/*</ol>*/}
    </div>
);


export default Options;