import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/app';
import setGlobalStyles from 'styles/globals'
import configStore from 'store'
import {Provider} from 'react-redux'

setGlobalStyles()
const renderApp = ()=>{
    const initState = {}
    const store = configStore(initState)
    store.dispatch({type:'@hn@init'})
    ReactDOM.render(
        <Provider store ={store}>
             <App />
        </Provider>,
         document.getElementById('root')
    );

}

renderApp()