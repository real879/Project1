import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { AppProps } from './store/types';
import { rootStore } from './store/index';
import GeneralPage from './pages/GeneralPage';

class App extends React.Component<AppProps, any>{
    render(){
        return (<Provider store={rootStore}>
            <GeneralPage />
        </Provider>)
    }
}

ReactDOM.render(
    <App title="Project1" version={0.1}/>,
    document.getElementById("app")
);
