import { Route, Routes } from 'react-router-dom';
import Home from './pages/Homepage';
import MyFavourites from './pages/MyFavourites';
import AddHouse from './pages/AddHouse';
import DeleteHouse from './pages/DeleteHouse';
import App from './pages/App';
import HouseDetails from './pages/HouseDetail/HouseDetails';

const Routess = () => (
  <div className="App">
    <Routes>
      <Route exact path="/" element={<App />} />
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
export default Routess;
