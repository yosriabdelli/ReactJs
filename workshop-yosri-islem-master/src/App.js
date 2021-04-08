import './App.css';
import HeaderTop from './components/Header';
import DescriBanner from './components/Banner';
import Produit from './components/Projects';
import TextFile from './components/ContenuFile';
import TextContact from './components/Contact';
import FooterBas from './components/Footer';


function App() {
  return (
    <div className="App">
      <HeaderTop/>
      <DescriBanner/>
      <TextFile/>
      <Produit/>
      <TextContact/>
      <FooterBas />
    </div>
  );
}

export default App;
