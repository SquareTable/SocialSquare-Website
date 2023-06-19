import logo from './logo.svg';
import './App.css';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          SocialSquare Website coming soon
        </p>
        <button onClick={() => navigate('/transferFromInstagram')}>Transfer data from Instagram to SocialSquare</button>
      </header>
    </div>
  );
}

export default App;
