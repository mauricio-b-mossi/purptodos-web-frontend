import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from '../Pages/LoggedOut/Login';
import RedirectLogin from '../Pages/LoggedOut/RedirectLogin';
import SignUp from '../Pages/LoggedOut/SignUp';

export default function LoggedOut() {
    return (
      <Router>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="*" element={<RedirectLogin />} />
        </Routes>
      </Router>
    );
}
