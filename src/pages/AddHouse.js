import { useDispatch } from 'react-redux';
import { addHouse } from '../redux/house/house';
import Navbar from '../componenets/navbar/Navbar';

const AddHouse = () => {
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData();
    data.append('house[name]', form.name.value);
    data.append('house[price]', form.price.value);
    data.append('house[owner_name]', form.owner.value);
    data.append('house[description]', form.description.value);
    data.append('house[picture]', form.picture.files[0]);
    dispatch(addHouse(data));
  };

  return (
    <>
      <Navbar title="New House" />
      <section className="add-house-section">
        <div className="backdrop column flex-center">
          <h1>Add a house</h1>
          <p>
            Turn the key and walk through the door.
            This new house is all you ever wanted and more.
            The best journey takes you home
          </p>
          <form className="column" onSubmit={handleSubmit}>
            <input
              className="input-text"
              name="name"
              type="text"
              placeholder="House type e.g pent house, cottage etc..."
              required
            />
            <input className="input-text" name="price" min="1" type="number" placeholder="Price e.g $30,00,0000..." required />
            <input className="input-text" name="owner" type="text" placeholder="owner name e.g John doe" required />
            <input className="input-text" name="picture" type="file" placeholder="Picture url" required />
            <textarea className="input-textarea" name="description" placeholder="write a description of the house ..." required />
            <button className="btn" type="submit">Add a house</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default AddHouse;
