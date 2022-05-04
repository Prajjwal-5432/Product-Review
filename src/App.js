import React from 'react';

import { Container } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllProducts from './Components/Products/AllProducts';

import Navbar from './Components/Navbar/Navbar';
import Search from './Components/Search/Search';
import Review from './Components/Review/Review';

const App = () => {
  return (
    <BrowserRouter>
      <Container fixed style={{ padding: "40px" }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<AllProducts />} />
          <Route path="/search" element={<Search />} />
          <Route path="/review" element={<Review />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
