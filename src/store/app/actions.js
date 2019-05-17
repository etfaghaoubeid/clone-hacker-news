import {SET_THEME} from './actionTypes'
export function setTheme(payload={}){
    return{
      type:SET_THEME,
      payload,
    }
}