"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.state = {
            options: ["Option 1", "Option 2", "Option 3"]
        };
        _this.handleRemoveAll = _this.handleRemoveAll.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: "handleRemoveAll",
        value: function handleRemoveAll() {
            console.log("Removed");
            this.setState(function () {
                return {
                    options: []
                };
            });
        }
    }, {
        key: "handlePick",
        value: function handlePick() {
            var num = Math.floor(Math.random() * this.state.options.length);
            alert(this.state.options[num]);
        }
    }, {
        key: "handleAddOption",
        value: function handleAddOption(new_option) {
            if (!new_option) return "Enter valid option";else if (this.state.options.indexOf(new_option) > -1) return "Option already exists";

            this.setState(function (prevState) {
                return {
                    options: prevState.options.concat([new_option])
                };
            });
        }
    }, {
        key: "render",
        value: function render() {
            var title = "Indecision App";
            var subtitle = " For the indecisive";
            return React.createElement(
                "div",
                null,
                React.createElement(Header, { title: title, subtitle: subtitle }),
                React.createElement(Action, {
                    hasOptions: this.state.options.length > 0,
                    handlePick: this.handlePick
                }),
                React.createElement(Options, {
                    options: this.state.options,
                    handleRemoveAll: this.handleRemoveAll
                }),
                React.createElement(AddOptions, {
                    handleAddOption: this.handleAddOption
                })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

var Header = function Header(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            props.title
        ),
        props.subtitle && React.createElement(
            "h2",
            null,
            props.subtitle
        )
    ) // Shows subtitle if available or else doesnt display anything
    ;
};

Header.defaultProps = {
    title: "Indecision"
};

var Action = function Action(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            {
                onClick: props.handlePick,
                disabled: !props.hasOptions },
            "What should i do?"
        )
    );
};

// class Action extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button
//                     onClick={this.props.handlePick}
//                     disabled={!this.props.hasOptions}>
//                     What should i do?
//                 </button>
//             </div>
//         );
//     }
// }

var Options = function Options(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            { onClick: props.handleRemoveAll },
            "Remove All Items"
        ),
        React.createElement(
            "ol",
            null,
            props.options.map(function (item) {
                return React.createElement(Option, { key: item, option: item });
            })
        )
    );
};

// class Options extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handleRemoveAll}>Remove All Items</button>
//                 <ol>
//                     {
//                         this.props.options.map((item) => {
//                             return <Option key={item} option={item} />;
//                         })
//                     }
//                 </ol>
//             </div>
//         );
//     }
// }

var Option = function Option(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "li",
            null,
            props.option
        )
    );
};

// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//                 <li>{this.props.option}</li>
//             </div>
//         );
//     }
// }

var AddOptions = function (_React$Component2) {
    _inherits(AddOptions, _React$Component2);

    function AddOptions(props) {
        _classCallCheck(this, AddOptions);

        var _this2 = _possibleConstructorReturn(this, (AddOptions.__proto__ || Object.getPrototypeOf(AddOptions)).call(this, props));

        _this2.addOption = _this2.addOption.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(AddOptions, [{
        key: "addOption",
        value: function addOption(e) {
            e.preventDefault();
            var new_option = e.target.elements.option.value.trim();
            var error = this.props.handleAddOption(new_option);
            this.setState(function () {
                return {
                    error: error
                };
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "p",
                    null,
                    this.state.error
                ),
                React.createElement(
                    "form",
                    { onSubmit: this.addOption },
                    React.createElement("input", { type: "text", name: "option", placeholder: "Add Option" }),
                    React.createElement(
                        "button",
                        null,
                        "Add!"
                    )
                )
            );
        }
    }]);

    return AddOptions;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
