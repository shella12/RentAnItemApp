import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/Homepage';
import MyFavourites from './pages/MyFavourites';
import AddHouse from './pages/AddHouse';
import DeleteHouse from './pages/DeleteHouse';
import App from './pages/App';
import HouseDetails from './pages/HouseDetail/HouseDetails';
import Login from './componenets/auth/Login';
import Registration from './componenets/auth/Registration';
// import Navbar from './componenets/navbar/Navbar';

const Routess = () => {
  const navigate = useNavigate();

  const handleSuccessfulAuth = () => {
    navigate('/houses');
  };

  return (
    <div className="App">
      {/* <Navbar /> */}
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="login" element={<Login handleSuccessfulAuth={handleSuccessfulAuth} />} />
        <Route path="register" element={<Registration handleSuccessfulAuth={handleSuccessfulAuth} />} />

        <Route path="houses">
          <Route index element={<Home handleSuccessfulAuth={handleSuccessfulAuth} />} />
          <Route path="favorites" element={<MyFavourites />} />
          <Route path="add" element={<AddHouse />} />
          <Route path="delete" element={<DeleteHouse />} />
          <Route path=":houseId" element={<HouseDetails />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Routess;
