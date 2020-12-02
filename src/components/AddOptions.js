import React from 'react';


export default class AddOptions extends React.Component {

    state = {
        error: undefined
    }

    addOption = (e) => {
        e.preventDefault();
        const new_option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(new_option);
        if (!error)
            e.target.elements.option.value = "";
        this.setState(() => ({ error: error }));
    }

    render() {
        return (
            <div>
                {<p>{this.state.error}</p>}
                <form onSubmit={this.addOption}>
                    <input type="text" name="option" placeholder="Add Option"></input>
                    <button>Add!</button>
                </form>
            </div>
        );
    }
}