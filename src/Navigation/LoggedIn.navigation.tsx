import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../Pages/LoggedIn/Home';
import RedirectHome from '../Pages/LoggedIn/RedirectHome';

export default function LoggedIn() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='*' element={ <RedirectHome/> }/>
        </Routes>
      </Router>
    );
}
