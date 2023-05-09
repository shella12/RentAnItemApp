import { Route, Routes } from 'react-router-dom';
import Home from './pages/Homepage';
import MyFavourites from './pages/MyFavourites';
import AddHouse from './pages/AddHouse';
import DeleteHouse from './pages/DeleteHouse';
import Navbar from './components/Navbar';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MyFavourites" element={<MyFavourites />} />
        <Route path="/AddHouse" element={<AddHouse />} />
        <Route path="/DeleteHouse" element={<DeleteHouse />} />
      </Routes>
    </div>
  );
}

export default App;

