import { useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import "./style.css";

const FormContato = ({ setContatos }) => {
  const history = useHistory();

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome e sobrenome obrigatórios"),
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    telefone: yup.string().required("Telefone obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  function clientePage() {
    history.push("/cliente");
  }

  function onSubmitFunction(data) {
    setContatos(...data);
  }

  return (
    <form
      className="container-form-contato"
      onSubmit={handleSubmit(onSubmitFunction)}
    >
      <div className="container-text-contato">
        <label className="label-input-contato">Nome Completo</label>
        <input
          className="input-contato"
          type="text"
          placeholder="Nome"
          {...register("name")}
        ></input>
        <span className="errorMsg">{errors.name?.message}</span>
      </div>

      <div className="container-text-contato">
        <label className="label-input-contato">Email</label>
        <input
          className="input-contato"
          type="text"
          placeholder="Email"
          {...register("email")}
        ></input>
        <span className="errorMsg">{errors.email?.message}</span>
      </div>

      <div className="container-text-contato">
        <label className="label-input-contato">Telefone</label>
        <input
          name="telefone"
          className="input-contato"
          type="number"
          placeholder="Nome"
          {...register("telefone")}
        ></input>
        <span className="errorMsg">{errors.telefone?.message}</span>
      </div>

      <button className="button-contato" type="submit">
        Cadastrar
      </button>

      <button className="button-contato" onClick={clientePage}>
        Cadastro de clientes
      </button>
    </form>
  );
};

export default FormContato;
