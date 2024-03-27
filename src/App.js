import logo from './logo.svg';
import './App.css';

import Header from './Components/Header';
import Hero from './Components/Hero';
import Products from './Components/Products';
import GOLEARN from './Components/GOLearn';
import GOFoundation from './Components/GOFoundation';
import GOTV from './Components/GOTV';
import InfiniteMoney  from './Components/InfiniteMoney';
import Community from './Components/Community'; 
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
      <div class="bg-gray-900 overflow-hidden">
      <Header></Header>
      
      <Hero></Hero>
      <Products></Products>
      <GOLEARN></GOLEARN>
      <GOTV></GOTV>
      <InfiniteMoney></InfiniteMoney>
      <GOFoundation></GOFoundation>
      <Community></Community>
      <Footer></Footer>

      
      
      </div>

    </div>
  );
}

export default App;
