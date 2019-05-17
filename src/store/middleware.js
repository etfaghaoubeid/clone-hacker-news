import thunk from 'redux-thunk'
import {compose,applyMiddleware}from 'redux'
import { createLogger } from 'redux-logger'

const middlewareList = []
const isProduction = process.env.NODE_ENV ==='production'

middlewareList.push(thunk);

if(isProduction){
    middlewareList.push(createLogger())
}
const middleware = compose(applyMiddleware(
    ...middlewareList
))

export default middleware