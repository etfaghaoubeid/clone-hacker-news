import {createStore} from 'redux'
import rootReducer from './rooReducer'
import middleware from './middleware'

const configStore = initState=>{
    const store = createStore(rootReducer,initState, middleware)
    return store;
}
export default configStore