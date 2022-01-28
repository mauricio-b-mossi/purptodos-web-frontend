import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { primaryColor } from '../constants';
import CreateTodo from '../Pages/LoggedIn/CreateTodo';
import EditTodo from '../Pages/LoggedIn/EditTodo';
import Home from '../Pages/LoggedIn/Home';
import { setLoggedIn } from '../slices/loginSlice';
import { selectToken, setUser } from '../slices/userSlice';

export default function LoggedIn() {

  const dispatch = useDispatch();

  const token = useSelector(selectToken);

  axios.defaults.headers.common["Authorization"] = "Bearer " + token;

  useEffect(() => {
    const getData = async (): Promise<void> => {
      try {
        const value = await localStorage.getItem("@user");
        if (value !== null) {
          const user = await JSON.parse(value);
          await dispatch(setUser(user));
        }
      } catch (error) {
        console.log(error);
        return;
      }
    };

    getData();
  }, []);

  const signOut = async () => {
    try {
      await localStorage.setItem('@user', '')
      await dispatch(setLoggedIn(false))
    } catch (error) {
      throw error
    }
  }

    return (
      <Router>
        <div
          style={{
            position: "absolute",
            right: 20,
            top: 20,
            color: primaryColor,
            fontWeight: "700",
            cursor: 'pointer'
          }}
          onClick={signOut}
        >
          Sign Out
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Create" element={<CreateTodo />} />
          <Route path="/Edit" element={<EditTodo />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </Router>
    );
}
