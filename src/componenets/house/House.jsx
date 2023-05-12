import React from 'react'
import './house.css'
import { useDispatch } from 'react-redux'
import { deleteHouse } from '../../redux/house/house'

const House = (props) => {
  const {data, handleRemove} = props
  const {id, picture, name, price} = data

  /*const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(deleteHouse(id));
  };*/
  return (
    <>
      <div className='column house'>
        <img src={picture} alt={`house ${name}`} />
        <div className='house-description'>
          <div className='row space-between'>
            <h4 className='max-content-flex'>{name}</h4>
            <h4>$ {price}</h4>
          </div>
          <div className='row space-between'>
            <div></div>
            <p>per Month</p>
          </div>
        </div>
        {
          handleRemove &&
          <button type="button" className='max-content-flex add-favorite btn-default'
          onClick={e=> handleRemove(id)}>Delete</button>
        }
      </div>
    </>
  )
}

export default House