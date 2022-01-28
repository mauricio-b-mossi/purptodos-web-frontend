import Title from "../../components/Title";
import { useSelector } from "react-redux";
import { selectUsername } from "../../slices/userSlice";
import TodoCard from "../../components/TodoCard";
import PlusButton from "../../components/PlusButton";
import { useNavigate } from "react-router-dom";
import "../../styles/index.css";
import { ReturnTodoInterface } from "../../dto/loggedIn.dto";
import axios from "axios";
import { useQuery } from "react-query";
// import spinner from './spinner.png'

const Home = () => {

  const username = useSelector(selectUsername);
  const navigator = useNavigate();

  const query = () => {
    return axios(process.env.REACT_APP_URL + "todo");
  };

  const { data, status } = useQuery("todos", query);

  return (
    <div className="_container">
      <Title
        purple={`${username}'s`}
        label={`Todos`}
        style={{ paddingBottom: 20 }}
      />

      {status === "loading" && (
        <div
          style={{
            height: 300,
            width: 300,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img className="animate-pulse" src="/logistics_.svg" alt="" />
        </div>
      )}

      {status === "error" && (
        <div
          style={{
            height: 300,
            width: 300,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src="/teem_working.svg" alt="" />
        </div>
      )}

      {/* {status === "idle" && <div style={{ minHeight: 300 }}>Idle...</div>} */}

      {status === "success" && (
        <div
          className="scroll"
          style={{
            overflowY: "scroll",
            minWidth: "100%",
            maxHeight: 500,
            minHeight: 300,
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          {data?.data < 1 ? (
            <div
              style={{
                height: 300,
                width: 300,
                display: "flex",
                flexDirection : 'column',
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src="/insert_.svg" alt="" />
            </div>
          ) : (
            data?.data.map(({ title, body, id }: ReturnTodoInterface) => (
              <TodoCard label={title} description={body} id={id} key={id} />
            ))
          ) }
        </div>
      )}

      <PlusButton onClick={() => navigator("/Create")} />
    </div>
  );
};

export default Home;
