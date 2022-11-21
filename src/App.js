import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from './Components/Login';
import Home from './Components/Home';
import Details from './Components/Details';
import Errror from './Components/Error';

function App() {
  return (
    <div className="App">
      <>
      <Header/>
      <Routes>       
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/details' element={<Details />} />
      <Route path='*' element={<Errror/>} /> 
   </Routes>
      </>
    </div>
  );
}

export default App;
