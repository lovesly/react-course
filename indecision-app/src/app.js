import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

// original
ReactDOM.render(<IndecisionApp options={ ["thing1"] }/>, document.getElementById('app'));
