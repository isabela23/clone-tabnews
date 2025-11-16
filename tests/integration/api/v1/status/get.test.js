test("Get to /api/v1/status should return 200", async () => {
  const response = await fetch(
    "http://glowing-space-chainsaw-6wx6gjpr5xvf5944-3000.app.github.dev//api/v1/status",
  );
  expect(response.status).toBe(200);
});
