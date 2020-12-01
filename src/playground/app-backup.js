console.log("Test code");

var app = {
    title: "Indecision App",
    subtitle: "Sample info",
    options: ["Option 1", " Option 2"]
};

const appRoot = document.getElementById("app");

const onFormSubmit = (e) => {               //Processing Form
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(" " + option);
        e.target.elements.option.value = "";
        renderApplication();
    }
};

const removeOptions = () => {          //Removing all list elements
    app.options.length = 0;
    renderApplication();
};

const decideOption = () => {
    const optionNo = Math.floor(Math.random() * app.options.length);
    const option = app.options[optionNo];
    alert(option);
};

const checkButton = () => {
    if (app.options.length === 0)
        return true;
    return false;
};

function renderApplication() {          //Rendering app
    var template = (
        <div>
            <h1>{app.title}</h1>
            <p>{app.subtitle}</p>
            <p>Add your options:</p>
            <button disabled={checkButton()} onClick={decideOption}>What should i do?</button>
            <button onClick={removeOptions}>Remove all Options</button>
            <ol>
                {
                    app.options.map((item) => {
                        return <li key={item}>{item}</li>;
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" placeholder="Enter option"></input>
                <button>Add</button>
            </form>
        </div>
    );


    ReactDOM.render(template, appRoot);
}

renderApplication();


