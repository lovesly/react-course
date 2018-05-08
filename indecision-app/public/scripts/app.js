'use strict';

console.log('App.js is running');

// JSX - JavaScript XML
var app = {
    title: 'This is JSX from app.js!',
    subTitle: 'This is come info',
    options: []
};

var onFormSubmit = function onFormSubmit(event) {
    // event is a proxy here
    // contains a SyntheticEvent target
    // interesting
    event.preventDefault();
    var option = event.target.elements.option.value;
    if (option) {
        app.options.push(option);
        event.target.elements.option.value = '';
        renderList();
    }
};

var onRemoveAll = function onRemoveAll() {
    app.options = [];
    renderList();
};

var onMakeDecision = function onMakeDecision() {
    var randomNum = ~~(Math.random() * app.options.length);
    var option = app.options[randomNum];
    alert(option);
    // console.log(randomNum);
};

var appRoot = document.getElementById('app');

var renderList = function renderList() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subTitle && React.createElement(
            'p',
            null,
            app.subTitle
        ),
        React.createElement(
            'p',
            null,
            app.options && app.options.length > 0 ? 'Here are your options' : 'No options'
        ),
        React.createElement(
            'button',
            { disabled: app.options.length === 0, onClick: onMakeDecision },
            'What should I do?'
        ),
        React.createElement(
            'button',
            { onClick: onRemoveAll },
            'Remove all'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    'Item: ',
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

renderList();

// {
//     [<p key="1">a</p>, <p key="2">b</p>, <p key="3">c</p>]
// }
