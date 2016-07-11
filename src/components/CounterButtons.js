/**
 * Created by krinjadl on 2016-07-01.
 */
import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions';

class CounterButtons extends React.Component{
    render(){
        return (
            <div>
                <button type="button"
                        onClick ={this.props.onIncrement}>
                    + </button>
                <button type="button"
                        onClick ={this.props.onDecrement}>
                    - </button>
            </div>
        )
    }
}

let mapDispatchToProps = (dispatch) =>{
    return {
        onIncrement : () => dispatch(increment()),
        onDecrement : () => dispatch(decrement())
    }
}

CounterButtons = connect(undefined, mapDispatchToProps)(CounterButtons);

export default CounterButtons;