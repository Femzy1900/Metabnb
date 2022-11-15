import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageWrapper from './components/wrapper/PageWrapper';
import Homepage from './pages/Homepage';
import PlaceToStay from './pages/PlaceToStay';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<PageWrapper><Homepage /></PageWrapper>} />
        <Route path="/place-to-stay" exact element={<PageWrapper><PlaceToStay /></PageWrapper>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
