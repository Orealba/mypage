import Footer from './components/Footer/Footer';
import './styles/index.css';

import Contact from './components/Contact/Contact';
import CartosApp from './components/CartosApp';
import Magazine from './components/Magazine/Magazine';

import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Tito from './components/Tito/Tito';
import Redes from './components/Redes/Redes';
function App() {
  return (
    <div>
      <Header />
      <Profile />
      <CartosApp />
      <Tito />
      <Magazine />
      <Redes />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
