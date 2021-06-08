import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import Routes from './routes';
import axios from 'axios';
axios.defaults.baseURL='https://queen-party-be.herokuapp.com/api/';
function App() {
  return (
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
  );
}

export default App;
