import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Counter from "./Components/Counter";
import Todo from "./Components/Todo";
import { useDispatch, useSelector } from "react-redux";
import {
  loginSuccess,
  loginRequest,
  loginFailure,
} from "./Redux/AuthReducer/action";

function App() {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const isAuth = useSelector((store) => store.AuthReducer.isAuth);
  const handleLogin = () => {
    if (userEmail) {
      const payload = {
        email: userEmail,
        password: password,
      };
      console.log(payload);
      dispatch(loginRequest());
      axios
        .post("https://reqres.in/api/login", payload)
        .then((r) => dispatch(loginSuccess(r.data)))
        .catch((e) => dispatch(loginFailure()));
    }
  };

  return (
    <div className="App">
      <Counter />
      <br />
      <div>
        <input
          type="email"
          placeholder="enter email"
          value={userEmail}
          onChange={(e) => {
            setUserEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="enter password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={handleLogin}>LOGIN</button>
      </div>
      {isAuth && <Todo />}
    </div>
  );
}

export default App;
