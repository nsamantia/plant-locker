import {applyMiddleware, createStore} from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import {composeWithDevTools} from 'redux-devtools-extension'
import reduxer from './reducer'


export default createStore (reducer, composeWithDevTools(applyMiddleware(promiseMiddleware)))