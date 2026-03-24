import orchestrator from "tests/orchestrator.js";
import database from "infra/database";
beforeAll(async () => {
  await orchestrator.waitForAllServices();
  await orchestrator.clearDatabase();
  await orchestrator.runPendingMigrations();
});

describe("POST /api/v1/users", () => {
  describe("Anonymous user", () => {
    test("With unique and valid data", async () => {
      await database.query({
        text: "INSERT INTO users (username, email, password) VALUES ($1, $2, $3);",
        values: ["isabela", "isabela@", "senha"],
      });
      const users = await database.query("SELECT * FROM users;");
      console.log(users.rows);

      const response = await fetch("http://localhost:3000/api/v1/users", {
        method: "POST",
      });

      // Espera que a pagina esteja funcionando 201=created
      expect(response.status).toBe(201);

      // const responseBody = await response.json();

      // Espera que o corpo da tela migration retorne uma lista
      // expect(Array.isArray(responseBody)).toBe(true);
    });
  });
});
