import React from 'react';
import {Link} from 'react-router-dom';


class Home extends React.Component{
    render(){
        return(
            <div>
                <h1>Home page</h1>
                <Link to="/About">go to About Page</Link>
                </div>
            )
    }
}
export default Home;