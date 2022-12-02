import "./style.css";

const CardContato = ({ contatos }) => {
  return (
    <div className="card-contato">
      {contatos?.name && (
        <p className="paragrafo-card-contato">Nome: {contatos.name} </p>
      )}
      {contatos?.email && (
        <p className="paragrafo-card-contato">email: {contatos.email} </p>
      )}
      {contatos?.telefone && (
        <p className="paragrafo-card-contato">telefone: {contatos.telefone} </p>
      )}
      {contatos?.date && (
        <p className="paragrafo-card-contato">
          Data de registro: {contatos.date}{" "}
        </p>
      )}
    </div>
  );
};

export default CardContato;
