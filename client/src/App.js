import "./App.css";
import React from "react";
import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Card from "./components/card";
import CardContato from "./components/cardContato";
import FormClient from "./components/formCliente";
import FormContato from "./components/formContato";
import Registro from "./pages/Registro/index";
import Login from "./pages/Login";

function App() {
  const [users, setUsers] = useState([]);
  const [contatos, setContatos] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path={"/cliente"}>
            <FormClient setUsers={setUsers} />
            <Card users={users}></Card>
          </Route>

          <Route path={"/contato"}>
            <FormContato setContatos={setContatos} />
            <CardContato contatos={contatos} />
          </Route>

          <Route exact path={"/"}>
            <Registro />
          </Route>

          <Route path={"/login"}>
            <Login />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
