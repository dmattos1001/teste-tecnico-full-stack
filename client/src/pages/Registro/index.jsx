/* eslint-disable no-unused-vars */
import { useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useState } from "react";
import * as yup from "yup";
import axios from "axios";

import "./style.css";

const Registro = (setUsers) => {
  const history = useHistory();

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("E-mail obrigatório"),
    password: yup.string().required("Senha obrigatória"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "As senhas precisam ser idênticas")
      .required("Confirmação de senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  function onSubmitFunction(data) {
    setUsers(data);
  }
  

  return (
    <div className="container-registro">
      <h2 className="title-registro">Registro</h2>
      <form
        className="container-form-registro"
        onSubmit={handleSubmit(onSubmitFunction)}
      >
        <label className="label-input-registro">Nome</label>
        <input
          name="nome"
          className="input-registro"
          type="text"
          placeholder="Nome"
          {...register("name")}
        ></input>

        <label className="label-input-registro">Email</label>
        <input
          name="email"
          className="input-registro"
          type="text"
          placeholder="Email"
          {...register("email")}
        ></input>

        <label className="label-input-registro">Password</label>
        <input
          name="password"
          className="input-registro"
          type="text"
          placeholder="Password"
          {...register("password")}
        ></input>

        <label className="label-input-registro">Confirm password</label>
        <input
          name="ConfirmPassword"
          className="input-registro"
          type="text"
          placeholder="Confirm Password"
          {...register("confirmPassword")}
        ></input>

        <div className="button-container">
          <button className="button-registro" type="submit">
            Cadastrar
          </button>
          <h3 className="text-registro"> Já possui cadastro? Faça o Login</h3>
          <button
            className="button-registro-back"
            onClick={() => history.push("/login")}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Registro;