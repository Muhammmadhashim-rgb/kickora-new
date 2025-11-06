import './App.css';
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";




  function App() {
    return (
      
        <Router>
          <Routes>
            <Route   path='/' element={<Home/>}> </Route>
               <Route  path='/home' element={<Home/>}> </Route>
            <Route path='/Shop' element={<Shop/>}> </Route>
          </Routes>
        </Router>
      

    );
  }

export default App;
