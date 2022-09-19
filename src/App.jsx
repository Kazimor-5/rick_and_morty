// ! COMPONENTS
import AllCharacters from './components/AllCharacters/AllCharacters';
import Details from './components/Details/Details';
import Error from './components/Error/Error';
import Header from './components/Header/Header';
// ! FILES
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<AllCharacters />} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;
