import { useMutation } from "react-query";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Link from "../../components/Link";
import Title from "../../components/Title";
import { useState} from "react";
import { LoginUserInterface } from "../../dto/loggedOut.dto";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setLoggedIn } from "../../slices/loginSlice";
import "../../styles/index.css";

export default function Login() {
  // Need to set up the redux store to use the dispatch function

  const dispatch = useDispatch();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const verify: boolean = username.length > 4 && password.length > 4;

  // This is passed to the mutation function
  const loginFunction = async (user: LoginUserInterface): Promise<void> => {
    const { data: returnedUser } = await axios.post(
      `https://purptodos.herokuapp.com/auth/login`,
      user
    );

    try {
      const storedUser = await JSON.stringify(returnedUser);
      await localStorage.setItem("@user", storedUser);
      //  FIXME: What does this mean? Set user to null for what?
      //  await dispatch(setUser({}));
    } catch (error) {
      throw error;
    }
  };

  // This navigates to the LoggedIn stack
  const onSuccess = async (): Promise<void> => {
    await dispatch(setLoggedIn(true));
  };

  const { isError, mutate } = useMutation(loginFunction, { onSuccess });


  return (
    <div className="_container">
      <Title label="Login" />

      <Input
        label="Usename"
        type="text"
        placeholder="John Doe"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <Input
        label="Password"
        type="password"
        placeholder="*******"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <p className="text-red-600">
        {isError && "Incorrect Credentials"}
      </p>

      <Button
        label="Login"
        isValid={verify}
        onClick={() => mutate({ username, password })}
      />
      <Link label="Sign Up" href="/SignUp" />
    </div>
  );
}
