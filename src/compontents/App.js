import React, {Component} from 'react';
import Main from './Main'
import Header from './Header';
import Forecast from './Forecast';
const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;
const Switch = ReactRouter.Switch;

class App extends Component {
    render() {
        return (
            <Router history={''}>
                <div className="app">
                    <Header/>
                    <Switch>
                        <Route exact path='/' component={Main}/>
                        <Route path='/forecast' component={Forecast}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
