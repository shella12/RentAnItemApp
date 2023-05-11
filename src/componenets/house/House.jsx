import React from 'react'
import './house.css'

const House = (props) => {
  const {picture, name, price, location, description} = props.data
  return (
    <>
      <div className='house'>
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
      </div>
    </>
  )
}

export default House