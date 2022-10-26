import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import AllRoutes from './Pages/AllRoutes';
import Footer from './Components/Footer';
import Banner from './Components/Banner';


function App() {
  return (
    <div className="App">
      <Banner/>
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
