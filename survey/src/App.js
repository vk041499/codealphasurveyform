import Welcome from "./Welcome"
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import LastPage from "./LastPage";
import Ques from "./Ques";
import AlreadyDone from "./AlreadyDone";
import ThankYou from "./ThankYou";

function App() {
  return (

    <Routes>
  
     <Route
    path="/"
    element={<Welcome />}
    

    />
    <Route
    path="/thankyou"
    element={<ThankYou/>}

    />
    
    <Route
    path="/ques"
    element={<Ques />}

    />
    <Route
    path="/alreadydone"
    element={<AlreadyDone />}

    />
    
<Route
    path="/lastpage"
    element={<LastPage />}

    />
    </Routes>
   
    
 
  )
}

export default App;