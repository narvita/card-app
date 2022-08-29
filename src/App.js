import { useState, useEffect } from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Instractions from './components/instructions/instructions';
import Main from './components/main'
import './App.css';

function App() {
  const [numArr, setNumArr] = useState([]);

  useEffect(() => {
    const storedArr = JSON.parse(localStorage.getItem('items'));
    storedArr? setNumArr(storedArr): setNumArr(numArr);
    
  },[]);

  function genereteNumber() {
    const number = Math.floor(Math.random() * 10000);
    const id = Math.floor(Math.random() * 100);
    setNumArr((storedArr) => {
      const modifiedCardsArr = [
        ...storedArr,
        {
          num: number,
          id: id,
        }
      ];
      localStorage.setItem('items', JSON.stringify(modifiedCardsArr));
      return modifiedCardsArr;
    })
  }

  function sortNumberArr() {
    setNumArr((prevState) => {
      const modifiedCardsArr = [
        ...prevState.sort((a, b) => a.num - b.num)
      ];
      localStorage.setItem('items', JSON.stringify(modifiedCardsArr));
      return modifiedCardsArr;
    })

  }

  function removeCard(id) {
    const modifiedCardsArr = [...numArr].filter(el => el.id !== id) 
    setNumArr(modifiedCardsArr);
    localStorage.setItem('items', JSON.stringify(modifiedCardsArr));
  }

  return (
    <div className="app">
      <Header addCard={genereteNumber} sort={sortNumberArr}/>
      <Main numArr={numArr} deletCard={removeCard}/>
      <Instractions />
      <Footer />
    </div>
  );
}

export default App;