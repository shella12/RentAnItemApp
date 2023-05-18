import { Route, Routes } from 'react-router-dom';
// import Navbar from './componenets/Navbar';
import Home from './pages/Homepage';
import MyFavourites from './pages/MyFavourites';
import AddHouse from './pages/AddHouse';
import DeleteHouse from './pages/DeleteHouse';
import HouseDetails from './pages/HouseDetails';
// import Header from './componenets/Header';
import App from './pages/App';
// import FeatureSection from './componenets/FeatureSection';
// import Footer from './componenets/Footer';

const Routess = () => (
  <div className="App">
    {/* <Navbar /> */}

    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="/" element={<Home />} />
      <Route path="/MyFavourites" element={<MyFavourites />} />
      <Route path="/AddHouse" element={<AddHouse />} />
      <Route path="/DeleteHouse" element={<DeleteHouse />} />
      <Route path="/HouseDetails" element={<HouseDetails />} />
    </Routes>
  </div>
);
export default Routess;
