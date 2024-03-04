import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import Coins from './components/Coins'; // Import the Coins component

function App() {
  const [listOfCoins, setListOfCoins] = useState([]);
  const [searchWord, setSearchWord] = useState('');

  useEffect(() => {
    axios
      .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc')
      .then(response => {
        const coins = response.data;
        const coinNames = coins.map(coin => coin.name);
        console.log(coinNames);
        setListOfCoins(coins);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const filteredCoins = listOfCoins.filter(coin =>
    coin.name.toLowerCase().includes(searchWord.toLowerCase())
  );

  return (

    <div className="App">
      <header className="crypto-header">
        <input
          type="text"
          placeholder="Enter the Crypto"
          onChange={event => {
            setSearchWord(event.target.value);
          }}
        />
      </header>
      <div className="crypto-display">
        {filteredCoins.map(coin => (
          <Coins
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            price={coin.current_price}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
