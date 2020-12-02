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



const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.handlePick}
                disabled={!props.hasOptions}>
                What should i do?
            </button>
        </div>
    );
}



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

class AddOptions extends React.Component {

    constructor(props) {
        super(props);
        this.addOption = this.addOption.bind(this);
        this.state = {
            error: undefined
        }
    }

    addOption(e) {
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

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));