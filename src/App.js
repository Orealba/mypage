import Footer from './components/Footer/Footer';
import './styles/App.css';
import Calendar from './components/Calendar/Calendar';
import Contact from './components/Contact/Contact';
import GreenCorner from './components/GreenCorner/GreenCorner';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Tito from './components/Tito/Tito';

function App() {
  return (
    <div>
      <Header />
      <Profile />
      <GreenCorner />
      <Calendar />
      <Tito />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
