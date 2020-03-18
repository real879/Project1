import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './App';

if (typeof window !== 'undefined'){
    ReactDOM.render(
        <App title="Project1" version={0.1} />,
        document.getElementById("app")
    );
}