import {SET_THEME} from './actionTypes'

const getInitState =()=>({
    theme:'dark'
})
const appReducer = (state= getInitState(),action)=>{
    switch(action.type){
        case SET_THEME:
        return {
            ...state,
            ...action.payload
        }
        default:
        return state
    }
}
export default appReducer;