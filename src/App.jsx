import axios from 'axios';
import { useState } from 'react'
import './App.css'

function App() {
  const [quoteData, setQuoteData] = useState({ content: '', author: '' });


  const handleClick = async () => {
    try {
      const response = await axios.get('https://api.quotable.io/quotes/random');
      setQuoteData(response.data[0])
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>

      <h1>Quote Generator</h1>
      <div className="card">
        <h2>{quoteData.content}</h2>
        <h4>{quoteData.author}</h4>
        <button onClick={handleClick}>Get Me Random Quote</button>
      </div>

    </>
  )
}

export default App
