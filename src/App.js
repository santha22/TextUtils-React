import './App.css';
import Navbar from './componenets/Navbar';
import TextForm from './componenets/TextForm';
import React, {useState} from 'react';
import Alert from './componenets/Alert';
import About from './componenets/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=> {
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(()=> {
        setAlert(null);
      },1500);
  }

  const removeBodyClasses = () => {
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
  }
  const toggleMode = (cls)=> {
    removeBodyClasses();
    document.body.classList.add('bg-'+cls);
    if(mode === 'light')
    {
      setMode("dark");
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success");
      // document.title = 'TextUtils - Dark Mode';
    }
    else if(cls === 'primary')
    {
      showAlert("blue mode has been enabled", "success");
    }
    else if(cls === 'danger')
    {
      showAlert("red mode has been enabled", "success");
    }
    else if(cls === 'success')
    {
      showAlert("green mode has been enabled", "success");
    }
    else if(cls === 'warning')
    {
      showAlert("yellow mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
      // document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
     <Router>
     <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
     <Alert alert={alert}/>
     <div className="container my-3">
       <Routes>
        <Route exact path="/about" element={<About mode={mode}/>}/> 

        <Route exact path="*" element={<TextForm showAlert={showAlert} heading="Try TextUtils - word Counter, Character Counter, 
        Remove extra spaces" mode={mode}/>}/>

        
      </Routes>
     </div>
     </Router>
    </>
  );
}

export default App;
