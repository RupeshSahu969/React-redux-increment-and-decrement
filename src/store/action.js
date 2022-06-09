import {COUNTER_DECREMENT,COUNTER_INCREMENT,COUNTER_MUL,COUNTER_DIV} from "./action.type"

 export  const add=(value) => {

    return {
        type: COUNTER_INCREMENT,
        payload: value
    }
    
 }
     
 export const substract =(value) => ({type: COUNTER_DECREMENT

    ,payload:value,

})
export  const mul=(value) => {

    return {
        type: COUNTER_MUL,
        payload: value
    }
    
 }
 export  const div=(value) => {

    return {
        type: COUNTER_DIV,
        payload: value
    }
    
 }