import request from "supertest";
import app from "../app";

let testCliente = {
  name: `Cliente Teste ${Math.floor(Math.random() * 10001)}`,
  email: `Cliente Teste ${Math.floor(Math.random() * 10001)}`,
  telefone: `Cliente Teste ${Math.floor(Math.random() * 10001)}`,
  data_de_registro: `Cliente Teste ${Math.floor(Math.random() * 10001)}`,
};

let testContato = {
  name: `Produto Teste ${Math.floor(Math.random() * 10001)}`,
  email: `Cliente Teste ${Math.floor(Math.random() * 10001)}`,
  telefone: `Cliente Teste ${Math.floor(Math.random() * 10001)}`,
};

describe("Testes rota /clientes", () => {
  it("Testando criacao de um cliente", async () => {
    const response = await request(app).post("/clientes").send(testCliente);

    testCliente.id = response.body.cliente.id;
    testContato.clientes_id = response.body.cliente.id;

    expect(response.status).toBe(201);
    expect(response.body.message).toBeDefined();
    expect(response.body.cliente.id).toBeDefined();
    expect(response.body.cliente.name).toContain("Cliente Teste");
  });

  it("Testando listagem de todos os clientes", async () => {
    const response = await request(app).get("/clientes");

    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(1);
    expect(response.body[0].name).toContain("Cliente Teste");
  });

  it("Testando delecao de um cliente", async () => {
    const response = await request(app).delete(`/clientes/${testCliente.id}`);

    expect(response.status).toBe(204);
  });
});
