import { useEffect, useRef, useState } from 'react';
import './App.css';
import Todo from './components/todo/Todo';



function App() {
  // const [val, setVal] = useState("");
  // const inputRef = useRef(null);

  // const data = useRef(["nkar1", "nkar2"]);

  // const firstRender = useRef(true);

  // useEffect(() => {
  //   if(firstRender.current){
  //     firstRender.current = false;
  //   }else{
  //     alert("changes")
  //   }
  // },[val])


  
  return (
    <div className="App">
      {/* <input 
       type="text" 
       value={val} 
       onChange={(e) => {
        setVal(e.target.value)
      }}
      ref={inputRef}
      /> */}
      {/* <button onClick={() => {
        if(val.trim()){
          inputRef.current.style.border = "solid"
          alert(val)
        }else{
         inputRef.current.style.border = "4px solid red"
        }

        
      }}>Click</button> */}
      <Todo/>
    </div>
  );
}

export default App;
