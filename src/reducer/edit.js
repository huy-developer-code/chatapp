import * as types from '../constant/index'
var init = []

const edit = (state = init,action)=>{
    switch(action.type){
        case types.EDIT_PRODUCT: 
        return action.value
        default : return state
    }
}

export default edit