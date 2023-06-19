import './App.css';
import Navbar from './component/Navbar'
import TextForm from './component/TextForm'
import About from './component/About'
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const handleMode = () => {
    if (mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor = "#222c36";
    }
    else if (mode === "dark"){
      setMode("light")
      document.body.style.backgroundColor = "white";
    }
  }
  return (
    <>
    <Navbar title="TextUtils" about="About TextUtils" mode={mode} handleMode={handleMode}/>
    {/* <About/> */}
    <div className="container">
      <TextForm title="Enter The Text For Analyzing" mode={mode}/>
    </div>
    </>
  );
}

export default App;
