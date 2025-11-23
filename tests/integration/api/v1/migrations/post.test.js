import database from "infra/database.js";

beforeAll(cleanDataBase);
async function cleanDataBase() {
  await database.query("DROP SCHEMA public CASCADE; CREATE SCHEMA public;");
}

test("POST to /api/v1/migrations should return 200", async () => {
  const response1 = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "POST",
  });

  // Espera que a pagina esteja funcionando e foi feito uma migration 201=created
  expect(response1.status).toBe(201);

  const responseBody1 = await response1.json();

  // Espera que o corpo da tela migration retorne uma lista
  expect(Array.isArray(responseBody1)).toBe(true);

  // Espera que o corpo da tela migration retorne uma lista
  expect(Array.isArray(responseBody1)).toBe(true);

  // Espera que o tamanho do corpo seja maior que zero
  expect(responseBody1.length).toBeGreaterThan(0);

  // Tenta fazer um segundo POST:
  const response2 = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "POST",
  });

  // Espera que a pagina esteja funcionando e foi feito uma migration 200
  expect(response2.status).toBe(200);

  const responseBody2 = await response2.json();

  // Espera que o corpo da tela migration retorne uma lista
  expect(Array.isArray(responseBody2)).toBe(true);

  // Espera que o tamanho do corpo seja zero
  // expect(responseBody2.length).toBe(0);
});
