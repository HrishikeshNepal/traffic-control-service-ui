import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import ListDriversComponent from './components/ListDriversComponent';
import UpdateDriversComponent from './components/UpdateDriversComponent';
import HomePageComponent from './components/HomePageComponent';
import SignUpFormComponent from './components/SignUpFormComponent';
import LoginPageComponent from './components/LoginPageComponent';
import ProfilePageComponent from './components/ProfilePageComponent';
import AddDriversComponent from './components/AddDriversComponent';

function App() {
  return (
    <div>
      <Router>
      <HeaderComponent />
      <div className="container">
        <Routes>
          <Route exact path='/' Component={HomePageComponent}></Route>
          <Route exact path='/drivers' Component={ListDriversComponent}></Route>
          <Route exact path='/add-driver' Component={AddDriversComponent}></Route>
          <Route exact path='/edit-driver/:driverId' Component={UpdateDriversComponent}></Route>
          <Route path="/signup" element={<SignUpFormComponent />} />
          <Route path="/login" element={<LoginPageComponent />} />
          <Route path="/profile" element={<ProfilePageComponent />} />
         </Routes>
      </div>
      <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
