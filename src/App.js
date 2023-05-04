import './App.css';
import {getUrl} from './request';

function App() {
  const handleClick = async () => {
    const url = await getUrl();
    console.log(url); // API'den gelen URL'i konsola yazdırır
  };

  return (
    <div className="App">
      <div className='app-container'>
        <h1>buromnia</h1>
        <button onClick={handleClick}>Generate URL</button>
      </div>
    </div>
  );
}

export default App;