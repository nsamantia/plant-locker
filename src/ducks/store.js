import {applyMiddleware, combineReducers, createStore} from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import {composeWithDevTools} from 'redux-devtools-extension'
import reducer from './reducer'
import folderReducer from './folderReducer'

const rootReducer = combineReducers({
    auth: reducer,
    folder: folderReducer
})


export default createStore (rootReducer, composeWithDevTools(applyMiddleware(promiseMiddleware)))