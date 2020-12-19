import React from 'react';
import Center from './Center';
import Footer from './Footer';
import App from './App'
class Header extends React.Component{
    // state is defined here
    constructor(){
        super()
        this.state={
            name:'basit',
            email:'touseefansarizabr@gmial.com'
        }
    }
    //STATE this function is being called from button and update state 
    //property by user input
    set_name=()=>{
        this.state.name=prompt("Enter New Name");
        console.log(this.state.name)
        //STATE below here is a predefined function that automitically updates
        // state properties by given values (no need to call it just call the parent 
        // function and work will be done)
        this.setState({
            email:'amirali@gmail.com'
        })
    }
    // whenever the display function is called this function 
    // adds new values to the ul list 
    display=()=>{
        console.log("called");
        let ul=document.getElementById('ul');
        let li=document.createElement('li');
        let name=this.state.name;
        li.innerHTML=name;
        ul.appendChild(li);
        li=document.createElement('li');
        let email=this.state.email;
        li.innerHTML=email;
        ul.appendChild(li);
     
console.log(ul)
        }

    get_prop=(passed_prop)=>{
        console.log("received data from center=>",passed_prop)
    }
    render(){

        console.log("header props send from App=>",this.props)
        return(
            <div>
                <p>Header</p>
                <Center second_prop={this.state.name} get_prop={this.get_prop}/>
                <Footer />

                {console.log(this.state.name)}
                {console.log(this.state)}
                {/* STATE button is used to update state */}
                <button onClick={this.set_name} type="button" className="btn btn-outline-primary">Change State Name</button>
                <input name="text" placeholder="name" onChange={(e)=>{this.setState({name:e.target.value})}}/>
                <input name="email" placeholder="email" onChange={(e)=>{this.setState({email:e.target.value})}}/>
                <button onClick={this.display}>display state</button>
            </div> 
        )
    }
}
export default Header;