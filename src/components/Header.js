import React from 'react';

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div> // Shows subtitle if available or else doesnt display anything
    );
}

Header.defaultProps = {
    title: "Indecision"
}

export default Header;