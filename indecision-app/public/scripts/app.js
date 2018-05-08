'use strict';

var app = {
    title: 'Visibility Toggle',
    detail: 'These are some details.',
    show: 'Show detail',
    hide: 'Hide detail'
};

var visible = false;

var toggle = function toggle() {
    visible = !visible;
    renderToggle();
};

var appRoot = document.getElementById('app');

var renderToggle = function renderToggle() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        React.createElement(
            'button',
            { onClick: toggle },
            visible ? app.show : app.hide
        ),
        visible && React.createElement(
            'p',
            null,
            app.detail
        )
    );
    ReactDOM.render(template, appRoot);
};

renderToggle();
