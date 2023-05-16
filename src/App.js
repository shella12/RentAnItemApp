import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Navbar from './componenets/Navbar';
import Home from './pages/Homepage';
import MyFavourites from './pages/MyFavourites';
import AddHouse from './pages/AddHouse';
import DeleteHouse from './pages/DeleteHouse';
import HouseDetails from './pages/HouseDetails';
import Header from './componenets/Header';
import FeatureSection from './componenets/FeatureSection';
import Footer from './componenets/Footer';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Header />
      <FeatureSection />
      <Footer />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/MyFavourites" element={<MyFavourites />} />
        <Route path="/AddHouse" element={<AddHouse />} />
        <Route path="/DeleteHouse" element={<DeleteHouse />} />
        <Route path="/HouseDetails" element={<HouseDetails />} />
      </Routes>
    </div>
  );
}

export default App;
