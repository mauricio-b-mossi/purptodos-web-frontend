import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from '../Pages/LoggedOut/Login';
import SignUp from '../Pages/LoggedOut/SignUp';

export default function LoggedOut() {
    return (
      <Router>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="*" element={<Navigate replace to='/Login' />} />
        </Routes>
      </Router>
    );
}
