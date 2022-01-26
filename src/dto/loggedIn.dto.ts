export interface CreateTodoInterface {
  title: string;
  body: string;
}

export interface EditTodoInterface{
  id : number,
  title: string;
  body : string
}

export interface ReturnTodoInterface {
  id: number;
  title: string;
  body: string;
}
