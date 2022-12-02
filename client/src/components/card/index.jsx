import "./style.css";

const Card = ({ user }) => {
  return (
    <div className="card">
      {user?.name && <p className="paragrafo-card">Nome: {user.name} </p>}
      {user?.email && <p className="paragrafo-card">email: {user.email} </p>}
      {user?.telefone && (
        <p className="paragrafo-card">telefone: {user.telefone} </p>
      )}
      {user?.date && (
        <p className="paragrafo-card">Data de registro: {user.date} </p>
      )}
    </div>
  );
};

export default Card;
