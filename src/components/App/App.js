// @flow

import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import AppContainer from '../AppContainer';
import AppHeader from '../AppHeader';
import Sidenav from '../Sidenav';

import reducer from '../../reducers';

const store = createStore(reducer, window.devToolsExtension && window.devToolsExtension());

const App = () => {
    return (
        <Provider store={store}>
            <AppContainer>
                <Sidenav>
                    <AppHeader />
                </Sidenav>
            </AppContainer>
        </Provider>
    );
}

export default App;
