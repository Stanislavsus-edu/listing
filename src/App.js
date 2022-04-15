import './App.css';
import etsy from './data/etsy.json';
import Listing from './Components/Listing'

function App() {
  return (
    <Listing items={etsy} />
  );
}

export default App;
