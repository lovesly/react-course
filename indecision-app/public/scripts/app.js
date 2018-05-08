'use strict';

console.log('App.js is running');

// JSX - JavaScript XML
var app = {
    title: 'This is JSX from app.js!',
    subTitle: 'This is come info',
    options: ['one', 'two', 'three']
};
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
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        ),
        React.createElement(
            'li',
            null,
            'Item three'
        )
    )
);

var count = 0;
var someId = 'someId';
var addOne = function addOne() {
    count++;
    // in this way, looks like everytime clicking the btn you are creating a new template
    // virtual dom? not re-rendering everything
    // diff -> only changed parts.
    renderCounterApp();
};
var minusOne = function minusOne() {
    count--;
    renderCounterApp();
};
var reset = function reset() {
    count = 0;
    renderCounterApp();
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
    var template2 = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Count: ',
            count
        ),
        React.createElement(
            'button',
            { id: someId, className: 'button', onClick: addOne },
            '+1'
        ),
        React.createElement(
            'button',
            { className: 'button', onClick: minusOne },
            '-1'
        ),
        React.createElement(
            'button',
            { className: 'button', onClick: reset },
            'reset'
        )
    );
    ReactDOM.render(template2, appRoot);
};

renderCounterApp();
