import { useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import "./style.css";

const FormClient = ({ setUsers }) => {
  const history = useHistory();

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome e sobrenome obrigatórios"),
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    telefone: yup.string().required("Telefone obrigatório"),
    date: yup.string().required("Data de registro obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  function contatoPage() {
    history.push("/contato");
  }

  function onSubmitFunction(data) {
    setUsers(data);
  }

  return (
    <form
      className="container-form-cliente"
      onSubmit={handleSubmit(onSubmitFunction)}
    >
      <div className="container-text">
        <label className="label-input">Nome Completo</label>
        <input
          name="nome"
          className="input"
          type="text"
          placeholder="Nome"
          {...register("name")}
        ></input>
        <span className="errorMsg">{errors.name?.message}</span>
      </div>

      <div className="container-text">
        <label className="label-input">Email</label>
        <input
          name="email"
          className="input"
          type="text"
          placeholder="Email"
          {...register("email")}
        ></input>
        <span className="errorMsg">{errors.email?.message}</span>
      </div>

      <div className="container-text">
        <label className="label-input">Telefone</label>
        <input
          name="telefone"
          className="input"
          type="number"
          placeholder="Telefone"
          {...register("telefone")}
        ></input>
        <span className="errorMsg">{errors.telefone?.message}</span>
      </div>

      <div className="container-text">
        <label className="label-input">Data de registro</label>
        <input
          name="date"
          className="input"
          type="text"
          placeholder="Data"
          {...register("date")}
        ></input>
        <span className="errorMsg">{errors.date?.message}</span>
      </div>

      <button className="button" type="submit">
        Cadastrar
      </button>

      <button className="button" onClick={contatoPage}>
        Cadastro de contatos
      </button>
    </form>
  );
};

export default FormClient;
