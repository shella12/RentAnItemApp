import { useDispatch } from 'react-redux';
import { useState } from 'react';
import FlashMessage from 'react-flash-message';
import { addHouse } from '../redux/house/house';

const AddHouse = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [picture, setPicture] = useState('');
  const [owner, setOwner] = useState('');
  const [status, setStatus] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData();
    data.append('house[name]', form.name.value);
    data.append('house[price]', form.price.value);
    data.append('house[owner_name]', form.owner.value);
    data.append('house[description]', form.description.value);
    data.append('house[picture]', form.picture.files[0]);
    setStatus(true);
    dispatch(addHouse(data));
    setName('');
    setPrice('');
    setDescription('');
    setPicture('');
    setOwner('');
  };

  return (
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
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input className="input-text" name="price" min="1" type="number" placeholder="Price e.g $30,00,0000..." value={price} onChange={(e) => setPrice(e.target.value)} required />
          <input className="input-text" name="owner" type="text" placeholder="owner name e.g John doe" value={owner} onChange={(e) => setOwner(e.target.value)} required />
          <input className="input-text" name="picture" type="file" placeholder="Picture url" value={picture} onChange={(e) => setPicture(e.target.value)} required />
          <textarea className="input-textarea" name="description" placeholder="write a description of the house ..." value={description} onChange={(e) => setDescription(e.target.value)} required />
          <button className="btn" type="submit">Add a house</button>
          {status && (
          <FlashMessage duration={5000} persistOnHover>
            <p>Message</p>
          </FlashMessage>
          )}
        </form>
      </div>
    </section>
  );
};

export default AddHouse;
