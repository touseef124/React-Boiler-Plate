import React from 'react';
import {Link} from 'react-router-dom';

class About extends React.Component{
    render(){
        return(
            <div>
                <h1>About page</h1>
                <Link to="/">go to Home Page</Link>
            </div>
        )
    }
}
export default About;