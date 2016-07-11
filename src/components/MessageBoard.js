/**
 * Created by krinjadl on 2016-07-11.
 */
import React from 'react';
import FormInput from './FormInput';
import MessageList from './MessageList';

class MessageBoard extends React.Component{
    render(){
        return(
            <div>
                <FormInput />
                <MessageList />
                
            </div>
        )
    }
}

export default MessageBoard
