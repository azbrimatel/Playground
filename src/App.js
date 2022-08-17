import logo from './logo.svg';
import './App.css';
import Greet from './components/welcome';
import Greetings from './components/welcome2';
import Message from './components/Message';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
    
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Build React Now
        </a>
      </header>
      <Greet name="Az" anotherName="Brimatel"><p>This is a paragraph</p></Greet>
      <Greet name = "Wale" anotherName = "Taiwo" ><button>Click here</button></Greet>
      <Greetings name = "Bayo"></Greetings>
      <Message/>
      <Counter />
    </div>
  );
}

export default App;
