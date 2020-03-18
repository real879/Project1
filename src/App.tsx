import * as React from 'react';
import { Provider } from 'react-redux';

import { AppProps } from './store/types';
import { rootStore } from './store/index';
import GeneralPage from './pages/GeneralPage';

export class App extends React.Component<AppProps, any>{
    render(){
        return (<Provider store={rootStore}>
            <GeneralPage />
        </Provider>)
    }
}