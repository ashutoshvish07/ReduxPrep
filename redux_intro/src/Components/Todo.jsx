import React, { useEffect } from "react";
import TodoInput from "./TodoInput";
import axios from "axios";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  todosRequest,
  todosSuccess,
  todosFailure,
  addTodoRequest,
  addTodoFailure,
  addTodoSucess,
} from "../Redux/Appreducer/action";
const Todo = () => {
  const dispatch = useDispatch();
  const { todos, isLoading, isError } = useSelector((store) => {
    return {
      todos: store.AppReducer.todos,
      isLoading: store.AppReducer.isLoading,
      isError: store.AppReducer.isError,
    };
  }, shallowEqual);
  console.log(todos);
  const getTodos = () => {
    dispatch(todosRequest());
    return axios
      .get("http://localhost:8080/todos")
      .then((r) => {
        //console.log(r.data)
        dispatch(todosSuccess(r.data)); // 1. sending data to action.js
      })
      .catch((err) => {
        console.log(err);
        dispatch(todosFailure());
      });
  };
  const addTodo = (payload) => {
    dispatch(addTodoRequest());
    return axios
      .post("http://localhost:8080/todos", payload)
      .then((r) => {
        dispatch(addTodoSucess());
        console.log(r.data);
      })
      .catch((err) => {
        dispatch(addTodoFailure());
        console.log(err);
      });
  };

  const handleTodos = (payload) => {
    addTodo(payload).then(() => getTodos());
  };
  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      Todo
      <TodoInput addTodo={handleTodos} />
      {todos.length > 0 &&
        todos.map((el) => {
          return <div key={el.id}>{el.title}</div>;
        })}
    </div>
  );
};

export default Todo;
