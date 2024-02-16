import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import ListDriversComponent from './components/ListDriversComponent';
import AddDriversComponent from './components/AddDriversComponent';

function App() {
  return (
    <div>
      <Router>
      <HeaderComponent />
      <div className="container">
        <Routes>
          <Route exact path='/' Component={ListDriversComponent}></Route>
          <Route exact path='/drivers' Component={ListDriversComponent}></Route>
          <Route exact path='/add-driver' Component={AddDriversComponent}></Route>
        </Routes>
      </div>
      <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
