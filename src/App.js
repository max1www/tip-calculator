import logo from './logo.svg';
import './App.scss';
import Island from './ui-kit/Island';

function App() {
  return (
    <div className="app">
      <header className="header">
        <img src={logo} className="logo" />
      </header>
    </div>
  );
}

export default App;
