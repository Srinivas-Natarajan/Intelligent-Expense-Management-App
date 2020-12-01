class Visibility extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visibile: false,
            buttonText: "Show Details",
            text: "This was originally hidden"
        }
        this.toggle = this.toggle.bind(this)
    }

    toggle() {

        this.setState((prevState) => {
            if (!prevState.visibile) {
                console.log("Visible, " + this.state.visibile);
                return {
                    buttonText: "Hide Details",
                    visibile: !prevState.visibile
                };
            }
            else {
                console.log("Invisible, " + this.state.visibile);
                return {
                    buttonText: "Show details",
                    visibile: !prevState.visibile
                };
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.toggle}>{this.state.buttonText}</button>
                <p hidden={!this.state.visibile}>{this.state.text}</p>
            </div>
        );
    }
}

ReactDOM.render(<Visibility />, document.getElementById("app"));




/*
console.log("App running!");

var app = {
    text: "This was originally hidden"
};

const appRoot = document.getElementById("app");
let visibile = false;
let buttonText = "Show details";

const toggle = () => {
    if (!visibile) {
        buttonText = "Hide Details";
        visibile = !visibile;
        console.log("Visible: " + visibile);
    }
    else {
        buttonText = "Show details";
        visibile = !visibile;
        console.log("Visible: " + visibile);
    }
    renderApp();
}

const renderApp = () => {
    let template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggle}>{buttonText}</button>
            <p hidden={!visibile}>{app.text}</p>
        </div>
    );
    ReactDOM.render(template, appRoot);
}

renderApp();
*/
