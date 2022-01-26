import Title from "../../components/Title";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUsername } from "../../slices/userSlice";
import TodoCard from "../../components/TodoCard";
import { primaryColor } from "../../constants";
import PlusButton from "../../components/PlusButton";
import { useNavigate } from "react-router-dom";
import "../../styles/index.css";
import { ReturnTodoInterface } from "../../dto/loggedIn.dto";
import axios from "axios";
import { url_web } from "../../url";
import { useQuery } from "react-query";

const Home = () => {
  const username = useSelector(selectUsername);
  const navigator = useNavigate();

  const query = () => {
    return axios(url_web + "todo");
  };

  const { data, status } = useQuery("todos", query);


  return (
    <div className="_container">
      <Title
        purple={`${username}'s`}
        label={`Todos`}
        style={{ paddingBottom: 20 }}
      />

      {status === "loading" && <div>Loading...</div>}

      {status === "error" && <div>Error...</div>}

      {status === "idle" && <div>Idle...</div>}

      <div className="scroll" style={{overflowY: 'scroll', minWidth : '100%', maxHeight: 500, display : 'flex', flexDirection : 'column', justifyContent : 'start', alignItems : 'center'}}>
        {status === "success" &&
          data?.data.map(({ title, body, id }: ReturnTodoInterface) => (
            <TodoCard label={title} description={body} id={id} key={id} />
          ))}
      </div>

      <PlusButton onClick={() => navigator("/Create")} />
    </div>
  );
};

export default Home;
