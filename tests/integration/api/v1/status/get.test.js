test("Get to /api/v1/status should return 200", async () => {
  const response = await fetch("https://www.datatennis.com.br/api/v1/status");
  expect(response.status).toBe(200);
});
