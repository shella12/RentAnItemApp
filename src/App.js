import { Route, Routes } from 'react-router-dom';
import Header from './componenets/Header';
import './App.css';
import Home from './pages/Homepage';
import MyFavourites from './pages/MyFavourites';
import AddHouse from './pages/AddHouse';
import DeleteHouse from './pages/DeleteHouse';
import HouseDetails from './pages/HouseDetails';

function App() {
  return (
    <div className="App">
      <Header />
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
