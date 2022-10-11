import './App.css';
import React from 'react';
import FullName from './components/FullName.js'; 
import Photo from './components/Photo';
import Adress from './components/Adress.js';
import Email from './components/Email';

function App(props) {
  return (
    <div className="App">
      <div className='user'>
     <FullName/>     
     <Adress/>
     <Email/>
     </div>
     <Photo/>
    </div>
  );
}

export default App;
