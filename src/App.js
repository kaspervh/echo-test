import React, {useState} from 'react';
import './App.css';

const App = () => {
  const [input, setInput] = useState('')
  const [msg, setMsg] = useState('');

  const getEcho = async (e) => {
    e.preventDefault();
    const res = await fetch(`http://digiflow-backend.azurewebsites.net/echo/${input}`);
    const data = await res.json();
    console.log(data);
    setMsg(data.text);
  }


  return (
    <div className="App">
      <br/>
      <br/>
      <div className="specialMesage">
        <h2>{msg !== '' ? msg : 'Write something'}</h2>
      </div>
      <form onSubmit={getEcho}>
        <input type="text" className='echo message' onChange={e => setInput(e.target.value)} value={input}/>
        <input type="submit"/>
      </form>
    </div>
  );
}

export default App;
