import React from "react"

const List = (props) =>{
    console.log(props)
    return <React.Fragment>
     <h1>{props.heading}</h1>
    
       <ul>
          <li>Mobile App</li>
          <li>Black Berry</li>
          <li>iphone</li>
          <li>window</li>
       </ul>
    </React.Fragment>
}

export const List2 = () =>{

    return <React.Fragment>
         <h1>system operting system</h1>
         <ul>
          <li>Mobile App</li>
          <li>Black Berry</li>
          <li>iphone</li>
          <li>window</li>
       </ul>
    </React.Fragment>
   
}
export default List
