export const reducer = (state={count:0},action) => {

console.log(state,action)

switch(action.type)
{
    case 'add': {
        state.count++;
        return {...state};
    }

    case 'substract': {
        state.count--;
        return {...state};
    }

    // case 'mul': {
    //     state.count ;
    //     return {...state};
    // }
    // case 'div': {
    //     state.count ;
    //     return {...state};
    // }
    

    default : {
        return state
    }

    // default :{state
    // }

}
    
}