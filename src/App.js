import './App.css';
import Navbar from './component/Navbar'
import TextForm from './component/TextForm'
import About from './component/About'
import { useState } from 'react';
import{
  BrowserRouter as Router,
  Link, 
  Switch, 
  Route
} from 'react-router-dom'

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
    <Router>
      <Navbar title="TextUtils" about="About TextUtils" mode={mode} handleMode={handleMode}/>
      <Switch>
        <Route path='/'>
          <div className="container">
            <TextForm title="Enter The Text For Analyzing" mode={mode}/>
          </div>
        </Route>
        <Route path='/about'>
          <About />
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
