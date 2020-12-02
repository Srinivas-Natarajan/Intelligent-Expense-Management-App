import React from 'react';

import AddOptions from './AddOptions';
import Options from './Options';
import Header from './Header';
import Action from './Action';

class IndecisionApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            options: ["Option 1", "Option 2", "Option 3"]
        }
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleRemoveOption = this.handleRemoveOption.bind(this);
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem("Option");
            const optionList = JSON.parse(json);
            if (optionList) {
                this.setState(() => ({ options: optionList }));
            }
            //console.log("Mounted Details ", json + " " + optionList);
        } catch (e) {
            console.log(e);
        }

    }

    componentDidUpdate(prevState) {
        if (this.state.options.length != prevState.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem("Option", json);
            //console.log("Updated ", json);
        }
    }

    handleRemoveAll() {
        this.setState(() => ({ options: [] }))
    }

    handleRemoveOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => { return optionToRemove != option; })
        }));
    }

    handlePick() {
        const num = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[num]);
    }

    handleAddOption(new_option) {
        if (!new_option)
            return "Enter valid option";
        else if (this.state.options.indexOf(new_option) > -1)
            return "Option already exists";

        this.setState((prevState) => ({ options: prevState.options.concat([new_option]) }));
    }

    render() {
        const title = "Indecision App";
        const subtitle = " For the indecisive"
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleRemoveAll={this.handleRemoveAll}
                    handleRemoveOption={this.handleRemoveOption}
                />
                <AddOptions
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
}

export default IndecisionApp;