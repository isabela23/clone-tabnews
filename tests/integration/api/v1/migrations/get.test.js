import database from "infra/database.js";

beforeAll(cleanDataBase);
async function cleanDataBase() {
  await database.query("DROP SCHEMA public CASCADE; CREATE SCHEMA public;");
}

test("Get to /api/v1/migrations should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/migrations");

  // Espera que a pagina esteja funcionando, retornando alguma coisa 200=sucesso
  expect(response.status).toBe(200);

  const responseBody = await response.json();

  // Espera que o corpo da tela migration retorne uma lista
  expect(Array.isArray(responseBody)).toBe(true);

  // Espera que o tamanho do corpo seja maior que zero
  expect(responseBody.length).toBeGreaterThan(0);
});
