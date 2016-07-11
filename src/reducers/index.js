/**
 * Created by krinjadl on 2016-07-01.
 */
import { INCREMENT,DECREMENT,SET_DIFF,ADDMESSAGE,UPDATEMESSAGESTATE,DELETEMSG,ITEMSELECTED} from '../actions';
import { combineReducers } from 'redux';
import { routerReducer} from 'react-router-redux';


const initialState = {
    messageList: [],
    newMessage:"",
    selectedItemIndex:null,
    value : 0,
    diff : 1
};

const msgReducer = (state = initialState , action ) => {  //set default state
    switch (action.type){
        case ADDMESSAGE:
            return Object.assign({}, state, {
                messageList:state.messageList.slice().concat(state.newMessage)
            });
        case UPDATEMESSAGESTATE:{
            return Object.assign({}, state, {
                newMessage: action.newMessage
            });
        }
        case DELETEMSG:
            let tmpArr = state.messageList.slice();
            tmpArr.splice(state.selectedItemIndex,1);
            return Object.assign({}, state, {
                messageList:tmpArr
            });
        case ITEMSELECTED:
            return Object.assign({}, state, {
                selectedItemIndex: action.selectedItemIndex
            });
        default:
            return state;
    }
};

const countReducer = (state = initialState , action ) => {  //set default state
    switch (action.type){
        
        case INCREMENT:
            return Object.assign({}, state, {
                value:state.value + state.diff
            });
        case DECREMENT:
            return Object.assign({}, state, {
                value:state.value - state.diff
            });
        case SET_DIFF:
            return Object.assign({}, state, {
                diff : action.diff
            });
        default:
            return state;
    }
};

// const extra = (state = {value : 'this_is_extra_reducer'}, action ) => {
//     switch (action.type){
//         default:
//             return state;
//     }
// };

const reduxTutorialApp = combineReducers({
    msgReducer,
    //countReducer,
    routing:routerReducer
});

export default reduxTutorialApp;

//export default msgReducer;





