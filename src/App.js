import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Homepage';
import MyFavourites from './pages/MyFavourites';
import AddHouse from './pages/AddHouse';
import DeleteHouse from './pages/DeleteHouse';
import HouseDetails from './pages/HouseDetail/HouseDetails';
import Auth from './componenets/Auth';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="houses">
          <Route index element={<Home />} />
          <Route path="favorites" element={<MyFavourites />} />
          <Route path="add" element={<AddHouse />} />
          <Route path="delete" element={<DeleteHouse />} />
          <Route path=":houseId" element={<HouseDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
