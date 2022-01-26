import React, { useEffect } from "react";
import LoggedOutNavigation from "./Navigation/LoggedOut.navigation";
import LoggedInNavigation from "./Navigation/LoggedIn.navigation";
import { useDispatch, useSelector } from "react-redux";
import { selectLoggedIn, setLoggedIn } from "./slices/loginSlice";
import { setUser } from "./slices/userSlice";
import { primaryColor } from "./constants";

export default function Navigation() {
  // Use react-readux to set state
  const isLoggedIn: boolean = useSelector(selectLoggedIn);

  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async (): Promise<void> => {
      try {
        const value = await localStorage.getItem("@user");
        if (value !== null) {
          const user = await JSON.parse(value);
          await dispatch(setUser(user));
          await dispatch(setLoggedIn(true));
        }
      } catch (error) {
        console.log(error);
        return;
      }
    };

    getData();
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#F2F2F2",
        }}
      >
          {isLoggedIn ? <LoggedInNavigation /> : <LoggedOutNavigation />}
      </div>
    </>
  );
}
