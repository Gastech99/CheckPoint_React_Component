import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Address from './Component/Profile/Address';
import PhotoProfile from './Component/Profile/PhotoProfile';
import FullName from './Component/Profile/FullName';
import './Component/Profile/Style.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <PhotoProfile/>
    <FullName/>
    <Address/>
  </React.StrictMode>,
  document.getElementById('root')
);