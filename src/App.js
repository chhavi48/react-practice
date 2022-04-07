
import './App.css';
import List,{List2} from './day1/List';
var style1={
  fontSize:'30px',
  background:'gray',
  borderRadius: '25px',
  width:'200px'

}
var style2={
  fontSize:'30px',
  background:'red',
  borderRadius: '25px',
  width:'200px'
}
var style3={
  fontSize:'30px',
  background:'blue',
  borderRadius: '25px',
  width:'200px'
}
var style4={
  fontSize:'30px',
  background:'green',
  borderRadius: '25px',
  width:'200px'
}
var style5={
  fontSize:'30px',
  background:'teal',
  borderRadius: '25px',
  width:'200px'
}
var style6={
  fontSize:'30px',
  background:'pink',
  borderRadius: '25px',
  width:'200px'
}
var style7={
  fontSize:'30px',
  background:'yellow',
  borderRadius: '25px',
  width:'200px'
}
var style8={
  fontSize:'30px',
  background:'orange',
  borderRadius: '25px',
  width:'200px'
}
var display={
  display:'flex'
}
var display1={
  display:'flex',
  marginTop:'5px'
}
function App() {
  return (
    <div className="App">
    
     hello folks  i am here haa haa
     no naaaa
     <List heading="Mobile application"/>

     <List2/>
     <div style={display}>
       <div>
       <button style={style1}>buttons</button>
       </div>
  
     
     <div>
       <button style={style2}>one</button>
     </div>
     <div>
       <button style={style3}>two</button>
     </div>
     <div>
       <button style={style4}>three</button>
     </div>

  
     </div>
     <div style={display1}>
       <div>
       <button style={style5}>four</button>
       </div>
  
     
     <div>
       <button style={style6}>five</button>
     </div>
     <div>
       <button style={style7}>six</button>
     </div>
     <div>
       <button style={style8}>seven</button>
     </div>

  
     </div>
    </div>
    
    
  );
}

export default App;
