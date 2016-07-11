import React from 'react';
import MessageBoard from './MessageBoard';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

import styles from './css/App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount(){
        window.obigo.print();
        if(window.obigo.CONFIGCONST){
            console.log(window.obigo.CONFIGCONST);
        }
    }
    // render(){
    //     return (
    //         <div className={styles.app}>
    //             <MessageBoard />
    //
    //         </div>
    //     )
    // }

    render(){
        return (
            <div className={styles.app}>
                <Link to="/">MessageBoard</Link>
                <Link to="/RtestBoard1">RtestBoard1</Link>
                <Link to="/RtestBoard2">RtestBoard2</Link>

                {this.props.children}
            </div>
        )
    }
}

export default App;