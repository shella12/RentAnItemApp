import { useSelector } from "react-redux";
import House from "../componenets/house/House";

const DeleteHouse = () => {
  const listAllHouse = useSelector((state) => state.housesSlice.houses);
  console.log(listAllHouse)
  return (
  <>
    <h1 className="flex-center">Delete House</h1>

    <ul className="row wrap">
        { listAllHouse?.length > 0 ? listAllHouse.map((house) => (
          <li key={house.id} className="flex-center house-wrapper">
            <House data={house} showBtnDelete={true} />
          </li>
        ))
          : <p>No Houses: List Empty</p>}
      </ul>

  </>
)};

export default DeleteHouse;
