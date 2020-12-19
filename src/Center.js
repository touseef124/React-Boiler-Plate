import React from 'react';
import App from './App';

class Center extends React.Component{
    send_prop=()=>{
        let item=prompt("enter data");
        this.props.get_prop(item);
    }
    render(){
     
        console.log("center props send from header=>",this.props)
        return(
            <div>
                
                <p>CentreBody</p>
                <button onClick={this.send_prop}>
                    pass prop to header from center</button> 
            </div>
        )
    }
}

export default Center;