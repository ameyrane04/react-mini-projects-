// import logo from './logo.svg';
// import './App.css';
import ProductGrid from './components/ProductGrid.jsx'; 
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Registration from './components/Registration.jsx';

import './App.css';

function App() {
  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header/>
      <ProductGrid/>
      <Footer/>

      {/* <Registration/> */}

    </div>
  );
}

export default App;
