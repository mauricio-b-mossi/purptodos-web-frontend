import Title from '../../components/Title'
import {useState} from 'react'

const Home = () => {

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  
  // make inipial check to see whether use is logged in
  

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 40,
        backgroundColor: "#F2F2F2",
      }}
    >
      <Title label="To-do's" />

      {/* <Input
        label="Usename"
        type='text'
        placeholder="John Doe"
        value={username}
        onChange={(e)=> setUsername(e.target.value)}

      />



      <Input label="Password" type='password' placeholder="*******" value={password} onChange={(e) => setPassword(e.target.value)} />

      <p className="text-red-600">{false && `Wrong Username Or Password`}</p>

      <Button label="Login" />
      <Link label="Sign Up" /> */}
    </div>
  );
}

export default Home
