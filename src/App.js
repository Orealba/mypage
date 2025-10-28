import Footer from './components/Footer';
import './App.css';
import Calendar from './components/Calendar';
import Contact from './components/Contact';
import CartosApp from './components/CartosApp';

import Header from './components/Header';
import Profile from './components/Profile';
import Tito from './components/Tito';

function App() {
  return (
    <div>
      <Header />
      <Profile />
      <CartosApp />
      <Calendar />
      <Tito />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
