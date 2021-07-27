import logo from './logo.svg';
import './App.css';
function Greeting( props) {
  return <h3> Hello {props.firstName} {props.lastName}</h3>
}

function Greeting2( {firstName}, {lastName}) {
  return <h3> Hello {firstName} {lastName}</h3>
}

function App() {
  const fName = 'Ramkumar'
  const lName = 'Krishnan'
  return (
    <div className="App">
      <h1>Welcome to react!</h1>
      <Greeting firstName={fName} lastName={lName}/>
      <Greeting2 firstName={fName} lastName={lName}/>
    </div>
  );
}

export default App;
