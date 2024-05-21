import logo from './logo.svg';
import './App.css';
import UserFavoriteAnimals from './UserFavoriteAnimals';
import Exercise from './Exercise3';
function App() {

  const myelement = <h1>I Love JSX!</h1>

  const sum = (5+5);

  const user = {
    firstName: 'Bob',
    lastName: 'Dylan',
    favAnimals: ['Horse', 'Turtle', 'Elephant', 'Monkey']
  };

  
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
          Learn React
        </a>
        <p>Hello World!</p>
        {myelement}
        <h3>React is {sum} times better with JSX!</h3>
        <UserFavoriteAnimals data={user.favAnimals}/>
        <Exercise/>
      </header>
    </div>
  );
}

export default App;
