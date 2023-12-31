import React,{ useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');//whether dark mode is enabled.
  const [alert, setAlert] = useState(null);

  const showAlert =(message, type)=>{
        setAlert({
          msg: message,
          type: type
        })
        setTimeout(()=>{
          setAlert(null);
        },3000)
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      document.body.style.color='white';
      showAlert("Dark mode enabled", "success");
      document.title = 'TextUtils - Dark Mode'
     
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      showAlert("Light mode enabled", "success");
      document.title = 'TextUtils - Light Mode'

    }
  }
  return (
    <>
{/* <Navbar title="TextUtils" aboutText = "About TextUtils"/> */}
{/* <Router> */}
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container" my-3="true">

{/* <Switch>
          <Route exact path="/about">
            <About />
          </Route>
         
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading = 'Enter the text to analyze' mode={mode}/>
            
          </Route>
        </Switch> */}

<TextForm showAlert={showAlert} heading = 'Enter the text to analyze' mode={mode} toggleMode={toggleMode}/>
{/* <About/> */}

</div>
{/* </Router> */}
    </>
    
  );
}

export default App;
