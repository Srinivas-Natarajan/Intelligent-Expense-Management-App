class IndecisionApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            options: ["Option 1", "Option 2", "Option 3"]
        }
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
    }

    handleRemoveAll() {
        console.log("Removed");
        this.setState(() => {
            return {
                options: []
            };
        });
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

        this.setState((prevState) => {
            return {
                options: prevState.options.concat([new_option])
            };
        });
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
            <ol>
                {
                    props.options.map((item) => {
                        return <Option key={item} option={item} />;
                    })
                }
            </ol>
        </div>
    );
}

const Option = (props) => {
    return (
        <div>
            <li>{props.option}</li>
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
        this.setState(() => {
            return {
                error: error
            };
        });
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