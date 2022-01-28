import { useEffect, useState } from "react";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import Title from "../../components/Title";
import Button from "../../components/Button";
import axios from "axios";
import { useMutation } from "react-query";
import {EditTodoInterface } from "../../dto/loggedIn.dto";
import { Location, useLocation, useNavigate } from "react-router-dom";

export default function EditTodo() {
  

  const [todoTitle, setTodoTitle] = useState<string>("");
  const [todoBody, setTodoBody] = useState<string>("");
  const [id, setId] = useState<number>(0)
  const [isState, setIsState] = useState<boolean>(false)

  const navigator = useNavigate();

  const {state}: Location | any = useLocation();

  
  
  useEffect(() => {
    try {
       setTodoTitle(state.title);
       setTodoBody(state.body);
      setId(state.id);
      setIsState(true)
    } catch (error) {
      console.log(error);
    }
   
  }, [])
  

  

  const validate: boolean = todoTitle.length > 2;

  const query = (todo: EditTodoInterface) => {
    return axios.put(process.env.REACT_APP_URL + "todo/" + id, todo);
  };

  const onSuccess = () => {
    setTodoTitle('')
    setTodoBody('')
    navigator('/')
  };

  const { mutate } = useMutation(query, { onSuccess });

  return (
    <div className="_container">
      <Title purple="Edit" label="Todo" />
      <Input
        label="Title"
        placeholder="Todo"
        type="string"
        value={todoTitle}
        onChange={(e) => setTodoTitle(e.target.value)}
      />
      <TextArea
        label="Body"
        placeholder="Clean the dishes"
        rows={20}
        value={todoBody}
        onChange={(e) => setTodoBody(e.target.value)}
      />

      <Button
        isValid={validate}
        label="Crush it"
        onClick={() => mutate({ title: todoTitle, body: todoBody, id : id })}
      />
    </div>
  );
}
