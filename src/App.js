/** @format */

import './App.css';
import Row from './Row';
import React from 'react';
import requests from './Requests';
import Banner from './Banner'
import Nav from "./Nav"

function App() {
  return (
    <div className='App'>
      <Nav />
      <Banner />
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
      <Row title='Trending Now' fetchUrl={requests.fetchUpcoming} />
    </div>
  );
}

export default App;
