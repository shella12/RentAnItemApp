import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from "react";
import { fetchFavorites, postFavorite } from '../redux/favorites/favoriteReducer';

const MyFavourites = () => {
  const [houseID, setHouseID] = useState()
  const listHouses = useSelector((state) => state.favorite.favorites);
  /* should be updated to useSlector on All house */
  const listAllHouse = [
    {
      "id": 1,
      "name": "Pent house",
      "price": "300000.0",
      "picture": "https://github.com/shella12/RentAnItemBackend/assets/44798044/5bb4ea2c-4ae5-45b8-9083-aeafbfbcf287",
      "description": "This house has 5 rooms upstairs and 4 rooms downstairs. Home design emphasizes clean lines and geometric shapes.\n The magic thing about this houe is that it feels good to leave, and it feels even better to come back.\n         Modern Conveniences and Green Features. Well-Placed Bathrooms. Quality Construction with Distinct Architecture. \n         Plenty of Storage Space. It's important to have designated storage areas and large closets.",
      "owner_name": "susan perry",
      "created_at": "2023-05-10T10:31:54.613Z",
      "updated_at": "2023-05-10T10:31:54.613Z"
    },
    {
      "id": 2,
      "name": "Bungalow",
      "price": "525600.0",
      "picture": "https://github.com/shella12/RentAnItemBackend/assets/44798044/42f981e7-e0cd-4008-aa82-32a0f31cc2d3",
      "description": "This house has 5 rooms upstairs and 4 rooms downstairs. Home design emphasizes clean lines and geometric shapes.\n         The magic thing about this houe is that it feels good to leave, and it feels even better to come back.\n         Modern Conveniences and Green Features. Well-Placed Bathrooms. Quality Construction with Distinct Architecture. \n         Plenty of Storage Space. It's important to have designated storage areas and large closets.",
      "owner_name": "Charllie Brown",
      "created_at": "2023-05-10T10:31:54.617Z",
      "updated_at": "2023-05-10T10:31:54.617Z"
    },
    {
      "id": 3,
      "name": "Cottage",
      "price": "990000.0",
      "picture": "https://github.com/shella12/RentAnItemBackend/assets/44798044/ff6876b6-92ed-4f1a-804a-0f7ac491dcc6",
      "description": "This house has 5 rooms upstairs and 4 rooms downstairs. Home design emphasizes clean lines and geometric shapes.\n         The magic thing about this houe is that it feels good to leave, and it feels even better to come back.\n         Modern Conveniences and Green Features. Well-Placed Bathrooms. Quality Construction with Distinct Architecture. \n         Plenty of Storage Space. It's important to have designated storage areas and large closets.",
      "owner_name": "Martha Michells",
      "created_at": "2023-05-10T10:31:54.626Z",
      "updated_at": "2023-05-10T10:31:54.626Z"
    },
    {
      id: 4,
      "name": "Contemporary architecture",
      "price": "796000.0",
      "picture": "https://github.com/shella12/RentAnItemBackend/assets/44798044/e222ceb8-9f5a-4f3d-b19a-1e458ac85047",
      "description": "This house has 5 rooms upstairs and 4 rooms downstairs. Home design emphasizes clean lines and geometric shapes.\n         The magic thing about this houe is that it feels good to leave, and it feels even better to come back.\n         Modern Conveniences and Green Features. Well-Placed Bathrooms. Quality Construction with Distinct Architecture. \n         Plenty of Storage Space. It's important to have designated storage areas and large closets.",
      "owner_name": "Martha Michells",
      "created_at": "2023-05-10T10:31:54.658Z",
      "updated_at": "2023-05-10T10:31:54.658Z"
    },
    {
      id: 5,
      "name": "Cottage",
      "price": "456000.0",
      "picture": "https://github.com/shella12/RentAnItemBackend/assets/44798044/876a9a91-e006-463d-8820-a29bb48b2c20",
      "description": "This house has 5 rooms upstairs and 4 rooms downstairs. Home design emphasizes clean lines and geometric shapes.\n         The magic thing about this houe is that it feels good to leave, and it feels even better to come back.\n         Modern Conveniences and Green Features. Well-Placed Bathrooms. Quality Construction with Distinct Architecture. \n         Plenty of Storage Space. It's important to have designated storage areas and large closets.",
      "owner_name": "Robert Barnard",
      "created_at": "2023-05-10T10:31:54.661Z",
      "updated_at": "2023-05-10T10:31:54.661Z"
    },
    {
      "id": 6,
      "name": "Mansion",
      "price": "870000.0",
      "picture": "https://github.com/shella12/RentAnItemBackend/assets/44798044/decdfb78-4b10-496f-b929-1fc0b2ddc469",
      "description": "This house has 5 rooms upstairs and 4 rooms downstairs. Home design emphasizes clean lines and geometric shapes.\n         The magic thing about this houe is that it feels good to leave, and it feels even better to come back.\n         Modern Conveniences and Green Features. Well-Placed Bathrooms. Quality Construction with Distinct Architecture. \n         Plenty of Storage Space. It's important to have designated storage areas and large closets.",
      "owner_name": "Kim buffey",
      "created_at": "2023-05-10T10:31:54.665Z",
      "updated_at": "2023-05-10T10:31:54.665Z"
    }
  ]
  const dispatch = useDispatch();
  useEffect(() => {
    if (listHouses.length === 0) {
      dispatch(fetchFavorites(1));
    }
  }, [dispatch, listHouses]);

  const handleAddFavorite = (event) => {
    event.preventDefault()
    const house = listAllHouse.find(({id})=> id == houseID)
    console.log("houseID", houseID)
    console.log(listAllHouse)
    console.log(house)
    dispatch(postFavorite({userID: 1, house: house}))
  }

  return (
  <>
    <h1>MyFavourites Page</h1>
    <form className="row" onSubmit={e => handleAddFavorite(e)}>
      <input type="text" placeholder="House ID" onChange={e=> setHouseID(e.currentTarget.value)}/>
      <input type="submit" placeholder="Add favorite" />
    </form>
    <ul>
      <li>House Static</li>
      { listHouses?.length > 0 ? listHouses.map((house) => (
        <li key={house.id} className='row'>
          <p>{house.name}#{house.id}</p>
          <form>
            <input type="submit" value="Delete" />
          </form>
        </li>
        ))
        : <p>No favorites: List Empty</p>
      }
    </ul>
  </>
)};

export default MyFavourites;
