// import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  // Link,
  Routes
} from "react-router-dom";
// import { Switch, Route } from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const removeBodyClasses = () => {
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-primary');
  }
  const toggleMode = (cls) => {
    removeBodyClasses();
    if (cls === 'warning' || cls === 'danger' || cls==='success' || cls==='primary') {
      document.body.classList.add('bg-' + cls)
    }
    else {
      if (mode === 'light') {
        showAlert(" Dark Mode has been enabled", "success");
        setMode('dark')
        document.body.style.backgroundColor = '#042743';
        document.title = 'Textutils-DarkMode'
      }
      else {
        showAlert(" Light Mode has been enabled", "success");
        document.body.style.backgroundColor = 'white';
        setMode('light')
        document.title = 'Textutils'

      }
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About textutils" mode={mode} toggleMode={toggleMode}></Navbar>
        <Alert alert={alert}></Alert>
        <div className="container my-3">

          <Routes>
            <Route path="/" element={< Textform heading="Enter the text to analyze" mode={mode} showAlert={showAlert} />}>
            </Route>
            <Route exact path="/About" element={<About mode={mode} />}>
            </Route>
          </Routes>


        </div>
      </Router>
    </>
  );
}

export default App;
