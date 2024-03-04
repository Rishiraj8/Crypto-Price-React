import React from 'react';

function Coins({ name, image, symbol, price }) {
    return (
      <div className='coin'>
        <h1 className=" text-cyan-600">{name}</h1>
        <img src={image} alt={name} />
        <h3>Symbol: {symbol}</h3>
        <h3>Price: {price}</h3>
      </div>
    );
  }

export default Coins;