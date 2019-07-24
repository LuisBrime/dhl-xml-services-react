import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Menu from './components/Menu';
import Main from './components/Main';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Menu />
                    <Route exact path="/" component={Main} />
                </div>
            </Router>
        );
    }
}

export default App;
