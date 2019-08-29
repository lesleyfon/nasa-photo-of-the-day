import React, {useEffect, useState } from "react";
import "./App.css";
import axios from 'axios'
import key from './key'

import Header from './components/Header/Header'
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Cards from "./components/SearchCards/Cards";

function App() {
  const [apod, setApod] = useState([])
  //search State
  const [searchInput, setSearchInput] = useState('California');

  // Search Results 
  const [searchResults, setSearchResult] = useState([])

  // 
  useEffect(()=>{
    const url= `https://api.nasa.gov/planetary/apod?api_key=${key}`
    axios.get(url)
    .then(res=> setApod(res.data))
    .catch(err=> console.log('Error: ', err))
  }, [])
  //Use effect for Search 
  useEffect(()=>{
    axios.get(`https://images-api.nasa.gov/search?q=${searchInput}`)
    .then(res=>{
      if(searchResults === undefined){
        return;
      } else if(searchResults.length <= 5){
        setSearchResult(res.data.collection.items.splice(0, 5))
      } else{
        return;
      }
    })
    .catch(err=>{
      console.log("Error: ". err)
    })
 
  }, [searchInput]);

  // handlging Search 
  const handleChange = e=>{
      setSearchInput(e.target.value);
  }

  return (
    <div className="App">
      <Header 
      setSearchInput = {setSearchInput}
      handleChange = {handleChange}
      searchInput = {searchInput}
      />
      <Jumbotron 
      apod = {apod}
      />

      <Cards 
        searchResults = {searchResults}
      />
    </div>
  );
}

export default App;
