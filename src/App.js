import './App.css';
import './components/Hero/Hero.css'
import './components/Header/Header.css'
import './components/style.css'
import { Resturant } from './components/Resturant';
import { StartPage } from './components/StartPage';
import {BrowserRouter as  Router,Routes,Route } from 'react-router-dom';


function App() {
  return (
<>
    <Router>
      <Routes>
        <Route exact path='/' element={
          <StartPage/>
        }>
        </Route>

        <Route exact path='/resturant' element={
          <Resturant/>
        }>
        </Route>
      </Routes>
      
      </Router>    
    </>    

  );
}

export default App;
