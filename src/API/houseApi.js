const api = 'http://localhost:3001/api/v1/houses';
// const addBooksApi = async (data) => {
//   const response = await fetch(`${api}`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json; charset=UTF-8',
//     },
//     body: JSON.stringify(data),
//   }).then((response) => response.text());
//   return response;
// };
const gethousesApi = async () => {
  const response = await fetch(`${api}`)
    .then((response) => response.json());
  console.log(response);
  return response;
};
// export const deleteBooksApi = async (id) => {
//   const response = await fetch(`${api}/${id}`, {
//     method: 'DELETE',
//     body: JSON.stringify({
//       item_id: id,
//     }),
//     headers: {
//       'Content-Type': 'application/json; charset=UTF-8',
//     },
//   })
//     .then((response) => response.text());
//   return response;
// };

export default gethousesApi;
