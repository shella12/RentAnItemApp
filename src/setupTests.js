import '@testing-library/jest-dom';
import fetchMock from 'fetch-mock';

export const testListHouses = [{
  id: 1, name: 'Pent house', price: '300000.0', picture: 'https://github.com/shella12/RentAnItemBackend/assets/44798044/5bb4ea2c-4ae5-45b8-9083-aeafbfbcf287', description: "This house has 5 rooms upstairs and 4 rooms downstairs. Home design emphasizes clean lines and geometric shapes.\n         The magic thing about this houe is that it feels good to leave, and it feels even better to come back.\n         Modern Conveniences and Green Features. Well-Placed Bathrooms. Quality Construction with Distinct Architecture. \n         Plenty of Storage Space. It's important to have designated storage areas and large closets.", owner_name: 'susan perry', created_at: '2023-05-12T12:38:59.989Z', updated_at: '2023-05-12T12:38:59.989Z',
}, {
  id: 6, name: 'Mansion', price: '870000.0', picture: 'https://github.com/shella12/RentAnItemBackend/assets/44798044/ac143109-1ae3-4885-a650-808b3bdb6cda', description: "This house has 5 rooms upstairs and 4 rooms downstairs. Home design emphasizes clean lines and geometric shapes.\n         The magic thing about this houe is that it feels good to leave, and it feels even better to come back.\n         Modern Conveniences and Green Features. Well-Placed Bathrooms. Quality Construction with Distinct Architecture. \n         Plenty of Storage Space. It's important to have designated storage areas and large closets.", owner_name: 'Kim buffey', created_at: '2023-05-12T12:39:00.010Z', updated_at: '2023-05-12T12:39:00.010Z',
}];

export const testListFavoriteHouses = [
  {
    id: 1,
    name: 'Pent house',
    price: '300000.0',
    picture: 'https://github.com/shella12/RentAnItemBackend/assets/44798044/5bb4ea2c-4ae5-45b8-9083-aeafbfbcf287',
    description: "This house has 5 rooms upstairs and 4 rooms downstairs. Home design emphasizes clean lines and geometric shapes.\n         The magic thing about this houe is that it feels good to leave, and it feels even better to come back.\n         Modern Conveniences and Green Features. Well-Placed Bathrooms. Quality Construction with Distinct Architecture. \n         Plenty of Storage Space. It's important to have designated storage areas and large closets.",
    owner_name: 'susan perry',
    created_at: '2023-05-12T12:38:59.989Z',
    updated_at: '2023-05-12T12:38:59.989Z',
  },
];

export const fetchFavoriteHouseData = (userID) => {
  fetchMock.getOnce(`https://renthousebackend.onrender.com/api/v1/users/${userID}/favorite_houses`, {
    headers: { 'content-type': 'application/json' },
    body: testListFavoriteHouses,
  });
};

export const fetchHouseData = () => {
  fetchMock.getOnce('https://renthousebackend.onrender.com/api/v1/houses', {
    headers: { 'content-type': 'application/json' },
    body: testListHouses,
  });
};
