/**
 * Created by krinjadl on 2016-07-01.
 */

/** Action Type **/
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const SET_DIFF = 'SET_DIFF';

export const ADDMESSAGE = 'ADDMESSAGE';
export const UPDATEMESSAGESTATE = 'UPDATEMESSAGESTATE';
export const DELETEMSG = 'DELETEMSG';
export const ITEMSELECTED = 'ITEMSELECTED';


/** Action Creator **/

export function addMessage(){
    return{
        type:ADDMESSAGE,
    };
}
export function updateMessageState(message){
    return {
        type:UPDATEMESSAGESTATE,
        newMessage : message
    }
}

export function deleteMessage(index){
    return{
        type:DELETEMSG,
    };
}

export function itemSelected(index){
    return{
        type:ITEMSELECTED,
        selectedItemIndex : index,
    }
}

export function increment(){
    return{
        type:INCREMENT
    };
}

export function decrement(){
    return{
        type:DECREMENT
    };
}

export function setDiff(value){
    return{
        type:SET_DIFF,
        diff:value
    };
}

