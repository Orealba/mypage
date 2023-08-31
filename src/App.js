import Footer from './components/Footer';
import './App.css';
import Calendar from './components/Calendar';
import Contact from './components/Contact';
import GreenCorner from './components/GreenCorner';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Profile from './components/Profile';
import Tito from './components/Tito';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Profile />
        <GreenCorner />
        <Calendar />
        <Tito />
        <Contact />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
