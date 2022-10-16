import { useEffect } from 'react';
import './App.css';
const tg = window.Telegram.WebApp;

function App() {

useEffect(() => {
  TextDecoder.ready()
}, [])

const onClose = () => {
  tg.close()
}

  return (
    <div className="App">
<button onClick={onClose}>close</button>
    </div>
  );
}

export default App;
