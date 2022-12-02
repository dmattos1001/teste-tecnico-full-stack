/* eslint-disable no-unused-vars */
import react from "react";
import { useHistory, Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useState } from "react";
import * as yup from "yup";
import axios from "axios";

import "./style.css";

const Login = () => {
  const history = useHistory();

  const formSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    if (data.email) {
      axios
        .post("/api", {
          email: data.email,
          password: data.password,
        })
        .then((response) => {
          const data = response.data;
          const { user, token } = data;

          if (response.status === 200) {
            localStorage.setItem("token", token);
            localStorage.setItem("name", user.name);

            setTimeout(() => history.push(`/cliente`), 1000);
          }
        })
        .catch((error) => {
          if (error.response.status === 401) {
            console.log(error);
          }
        });
    }
  };

  return (
    <div className="container-login">
      <h2 className="title-login">Login</h2>
      <form className="form-login" onSubmit={handleSubmit(onSubmitFunction)}>
        <label className="label-login">E-mail</label>
        <input
          name="email"
          className="input-login"
          type="text"
          placeholder="Digite aqui seu e-mail"
          {...register("email")}
        />

        <label className="label-login">Senha</label>
        <input
          name="password"
          className="input-login"
          type="password"
          placeholder="Digite aqui sua senha"
          {...register("password")}
        />

        <div className="footer-login">
          <button className="button-login-join" type="submit">
            Entrar
          </button>
          <h3 className="text-login">Ainda não possui uma conta?</h3>
          <button
            className="button-login-register"
            type="submit"
            onClick={() => history.push("/")}
          >
            Cadastre-se
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;