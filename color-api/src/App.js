import logo from './logo.svg';
import './App.css';
import React from 'react'

const axios = require("axios")

function App() {
  const [colors, setColors] = React.useState('')
  const randomNum = Math.floor(Math.random() * 5)
  function handleSubmit() {
    // React.useEffect(() => {
      axios.get(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
        .then(res => setColors(()=> [
          res.data.colors[0].hex]))
        .catch(err => console.log(err))
    // }, [count])
  }
  React.useEffect(()=>{

    handleSubmit()
  } 
  ,[])
    const styles = { backgroundColor: `#${colors}` }
    console.log(colors)
    return (
      <div className="App">
        <div className='colors' style={styles}></div>
        <button onClick={handleSubmit}> Color me!</button>
      </div>
    );
  }

  export default App;
