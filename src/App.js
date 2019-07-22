import React, { useState, useEffect } from "react";
// import "./App.css";
import NasaCard from './NasaCard'
import { Header } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import axios from 'axios';

function App() {

  return (
    <div className="App">
      <Header as='h1' color='teal' textAlign='center'>
        NASA Photo of the Day
      </Header>
      <NasaCard />
    </div>
  );
}

export default App;
