console.log('App.js is running');

// JSX - JavaScript XML
const app = {
    title: 'This is JSX from app.js!',
    subTitle: 'This is come info',
    options: ['one', 'two', 'three'],
}
const template = (
    <div>
        <h1>{ app.title }</h1>
        { app.subTitle && <p>{app.subTitle}</p> }
        <p>{ (app.options && app.options.length > 0) ? 'Here are your options' : 'No options' }</p> 
        <ol>
            <li>Item one</li>
            <li>Item two</li>
            <li>Item three</li>
        </ol>
    </div>
);

let user = {
    name: 'ZZ',
    age: 27,
    location: 'China'
};

function getLocation(loc) {
    if (loc) {
        return <p>Location: {loc}</p>;
    }
}

const template2 = (
    <div>
        <h1>{ user.name ? user.name + '!' : 'Anonymous' }</h1>
        { user.age && user.age >= 18 && <p>Age: { user.age }</p> }
        { getLocation(user.location) }
    </div>
);
const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);