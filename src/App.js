import './App.css';
import { useState, useEffect} from 'react';

function App() {
  const [quote,setQuote] = useState(null);
  const [quotes,setQuotes]= useState([]);

  useEffect(()=>{
    fetch("https://type.fit/api/quotes")
    .then((res)=>res.json())
    .then((json)=>{
      setQuotes(json);
      setQuote(json[0]);
    });
  },[]);

  function getRandomQuote(quotes){
    return quotes[Math.floor(Math.random() * quotes.length)];
  }

  function getNewQuote(){
    setQuote(getRandomQuote(quotes))
  }

  return (
    <div className="App">  
        <h1>Quote Generator</h1>
        <section>
        <button onClick={getNewQuote}>New Quote</button>
        <h3>
          <span>"</span>
          {quote?.text}
          <span>"</span>
          </h3>
          <i>-{quote?.author}</i>
        
        </section>   
    </div>
  );
}

export default App;
