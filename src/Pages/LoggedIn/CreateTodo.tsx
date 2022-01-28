import { useState } from "react";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import Title from "../../components/Title";
import Button from "../../components/Button";
import axios from "axios";
import { useMutation } from "react-query";
import { CreateTodoInterface } from "../../dto/loggedIn.dto";
import { useNavigate } from "react-router-dom";

export default function CreateTodo() {
  const [todoTitle, setTodoTitle] = useState<string>("");
  const [todoBody, setTodoBody] = useState<string>("");

  const navigator = useNavigate();

  const validate: boolean = todoTitle.length > 2;

  const query = (todo: CreateTodoInterface) => {
    return axios.post(process.env.REACT_APP_URL + "todo", todo);
  };

  const onSuccess = () => {
    setTodoTitle('')
    setTodoBody('')
    navigator('/')
  };

  const { mutate } = useMutation(query, { onSuccess });

  return (
    <div className="_container">
      <Title purple="Create" label="Todo" />
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
        onClick={() => mutate({ title: todoTitle, body: todoBody })}
      />
    </div>
  );
}
