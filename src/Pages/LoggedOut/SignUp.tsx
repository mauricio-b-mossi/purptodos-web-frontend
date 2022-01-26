import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Link from "../../components/Link";
import Title from "../../components/Title";
import { mailFormat } from "../../constants";
import "../../styles/index.css";

// To validate the email remember to first turn everything to lower-case

export default function SignUp() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  
  const verify: boolean = username.length > 4 && password.length > 4 && email.match(mailFormat) !== null;

    
  return (
    <div
      className="_container"
    >
          <Title label="Sign Up" />
          

          <Input label="Email"
              type="email"
              placeholder="johndoe@gmail.com"
              value={email}
          onChange={(e) => setEmail(e.target.value)}/>

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

      <p className="text-red-600">{false && `Wrong Username Or Password`}</p>

      <Button label="Sign Up" isValid={ verify }/>
      <Link label="Login" href={"/Login"}/>
    </div>
  );
}
