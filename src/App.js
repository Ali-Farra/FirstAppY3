import './App.css';
import img from './Me.jpg';
import background from './kw2aHe.jpg';

function App() {
  return (
    <div className="App" style={{ 
      backgroundImage: `url(${background})`,
    }}>
      <h1 className="H1">Ali Ehsan El.Farra</h1>
      <img className="img" src={img}/>
      <h2 className="Bio">
        16 Y.O<br/>
        <br/>
        CFP Student<br/>
        <br/>
        Crazy about Tech & Cars.<br/>
        <br/>
        I can rap!<br/>
        <br/>
        I can do cardtricks.<br/>
        <br/>
        I'm passionat & excited for coding.<br/>
        <br/>
        I'm bad handling stress<br/>
      </h2>
    </div>
  );
}

export default App;