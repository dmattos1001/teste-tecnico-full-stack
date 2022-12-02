import request from "supertest";
import app from "../app";

const user = {
  name: "marcos",
  email: "marcos@mail.com",
  password: "123456",
};

const login = {
  email: "marcoss",
  password: "123456",
};

describe("Testes rota POST /users", () => {
  it("Testando criação de usuário com um corpo correto", async () => {
    const response = await request(app).post("/users").send(user);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("name");
    expect(response.body).toHaveProperty("email");
    expect(response.body).not.toHaveProperty("password");
    expect(response.body).toHaveProperty("createdOn");
    expect(response.body).toHaveProperty("updatedOn");
    expect(response.body).toHaveProperty("uuid");
  });

  it("Testando criação de usuário com e-mail já utilizado", async () => {
    const response = await request(app).post("/users").send(userAdm);

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("message");
  });
});

describe("Testando rota POST /login", () => {
  it("Testando login válido", async () => {
    const response = await request(app).post("/login").send(login);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("token");
    expect(typeof response.body.token).toBe("string");
  });

  it("Testando login inválido", async () => {
    loginAdm.password = "123";
    const response = await request(app).post("/login").send(login);

    expect(response.status).toBe(401);
    expect(response.body).toHaveProperty("message");
    loginAdm.password = "123456";
  });
});

describe("Testando rota GET /users", () => {
  it("Testando listagem de usuários", async () => {
    const login = await request(app).post("/login").send(login);
    const { token } = login.body;

    const response = await request(app)
      .get("/users")
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});
