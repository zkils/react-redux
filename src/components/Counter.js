/**
 * Created by krinjadl on 2016-07-01.
 */
import React from 'react';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { connect } from 'react-redux';


class Counter extends React.Component {
    static get childContextTypes() {
        return { muiTheme: React.PropTypes.object };
    }
    getChildContext(){
        return {  muiTheme: getMuiTheme()};
    }

    constructor(props) {
        super(props);

    }



    render() {
        return (
            <h1>VALUE: {this.props.value}</h1>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        value : state.counter.value
    };
}

Counter = connect(mapStateToProps)(Counter);

export default Counter;