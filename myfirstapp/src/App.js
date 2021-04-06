import './App.css';
import SecondComponent from './Components/MySecondComponent';
import Menu from './Components/MyHeader';
import Contenu from './Components/ContenuBody';

function App() {
  return (
    <div className="App">
        <Menu/>
        <Contenu/>
        <SecondComponent />
    </div>
  );
}

export default App;
