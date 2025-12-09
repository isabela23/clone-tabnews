import database from "infra/database.js";
import orchestrator from "tests/orchestrator.js";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
  await database.query("DROP SCHEMA public CASCADE; CREATE SCHEMA public;");
});

describe("GET /api/v1/migrations", () => {
  describe("Anonymous user", () => {
    test("Retrieving pending migrations", async () => {
      const response = await fetch("http://localhost:3000/api/v1/migrations");

      // Espera que a pagina esteja funcionando, retornando alguma coisa 200=sucesso
      expect(response.status).toBe(200);

      const responseBody = await response.json();

      // Espera que o corpo da tela migration retorne uma lista
      expect(Array.isArray(responseBody)).toBe(true);

      // Espera que o tamanho do corpo seja maior que zero
      expect(responseBody.length).toBeGreaterThan(0);
    });
  });
});
