// import { render } from '@testing-library/react';
// import React from 'react';


// class Person extends React.Component{
//     render(){
//         return (
//             <p>my name is touseef</p>
//         )
        
//     }
// }

// export default Person;



import React from 'react';

class Person extends React.Component{
    
    render(){
        let firstname="touseef";
        let lastname="ansari";
        let fullname=firstname+" "+lastname;

        let arr=[{name:"basit",value:23},{name:'talha',value:21}]
        return(
            <div>my name is touseef <br />
            <ul>
                <li>{firstname}</li>
                <li>{fullname}</li>
            </ul>
            {/* this ul is used to display above array as individual elements */}
            <ul>
                {arr.map((item,index)=>{
                    console.log(item)
                   return <li key={index} >{item.name}</li>
                })}
            </ul>
                
            </div>
        )
    }
}

export default Person;