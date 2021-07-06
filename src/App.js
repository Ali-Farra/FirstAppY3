import './App.css';
import React from 'react';
import TodoList from './components/todo';
// import React, {useState} from 'react';
// import img from './Me.jpg';

function App() {

  // const [state,setState]=useState(false);
  // let url="https://www.facebook.com/ali.ef.182/";

  return (
    <div className="App" >
      <TodoList />
      
      {/* <h1 className="H1">Ali Ehsan El.Farra</h1>
      <button className="Facebook" >
      <a className="FBlink" href={url}>My Facebook</a>
      </button>
      <img className="img" src={img}/>
      <h2 className="Bio">
        16 Y.O<br/>
        <br/>
        CFP Student<br/>
        Crazy about Tech & Cars.<br/>
        I can rap!<br/>
        I can do cardtricks.<br/>
        I'm passionat & excited for coding.<br/>
        I'm bad handling stress<br/>
      </h2> */}
    </div>
  );
}

export default App;