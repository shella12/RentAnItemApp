import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Homepage';
import MyFavourites from './pages/MyFavourites';
import AddHouse from './pages/AddHouse';
import DeleteHouse from './pages/DeleteHouse';
import HouseDetails from './pages/HouseDetails';
import Navbar from './componenets/Navbar';



function App() {
  return (
    <div className="App">
      <Navbar />
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
