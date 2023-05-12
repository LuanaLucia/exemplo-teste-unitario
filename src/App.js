import logo from './logo.svg';
import './App.css';
import Input from './Input'

function App() {
  const codigocerveja = "1"
  return (
    <div className="App">
      <Input />
      <img src={`${codigocerveja}.png`} />
    </div>
  );
}

export default App;
