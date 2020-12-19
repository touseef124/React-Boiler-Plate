import React from 'react';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';

class AppRouter extends React.Component{
    render(){
        return(
            <div>
                <Router>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/About" component={About}/>
                </Router>
            </div>
        )
    }
}

export default AppRouter;