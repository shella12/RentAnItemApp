import React from 'react'
import './house.css'

const House = (props) => {
  const {data, handleRemove} = props
  const {id, name, price, description} = data

  return (
    <>
      <div className='column house'>
        <img src={data.picture_url} alt={`house ${name}`} />
        <div className='column house-content-wrapper'>
          <div className='column max-content-flex house-content'>
            <div className='row space-between'>
              <h4 className='max-content-flex house-title'>{name}</h4>
              <h4>$ {price} <br/>per Month</h4>
            </div>
            <p className='desktop-only house-description'>{description}</p>
          </div>
          {
            handleRemove &&
            <button type="button" className='add-favorite btn-default'
            onClick={e=> handleRemove(id)}>Delete</button>
          }
        </div>
      </div>
    </>
  )
}

export default House