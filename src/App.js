import React, { useState, useEffect } from "react";
import "./App.css";
import NasaCard from './NasaCard'

import axios from 'axios';

function App() {

  return (
    <div className="App">
      <h1>NASA Photo of the Day</h1>
      <NasaCard />
    </div>
  );
}

export default App;
