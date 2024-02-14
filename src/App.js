import './App.css';
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import ListDriversComponent from './components/ListDriversComponent';

function App() {
  return (
    <div>
      <HeaderComponent />
      <ListDriversComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
