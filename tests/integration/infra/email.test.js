import email from "infra/email.js";
import orchestrator from "tests/orchestrator.js";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
});

describe("infra/email.js", () => {
  test("send()", async () => {
    await orchestrator.deleteAllEmails();
    await email.send({
      from: "Isabela <teste@gmail.com>",
      to: "teste@gmail.com",
      subject: "Teste de assunto",
      text: "Teste de corpo",
    });

    await email.send({
      from: "Isabela <teste@gmail.com>",
      to: "teste@gmail.com",
      subject: "Ultimo email - Teste de assunto",
      text: "Ultimo email - teste de corpo",
    });

    const lastEmail = await orchestrator.getLastEmail();
    expect(lastEmail.sender).toBe("<teste@gmail.com>");
    expect(lastEmail.recipients[0]).toBe("<teste@gmail.com>");
    expect(lastEmail.subject).toBe("Ultimo email - Teste de assunto");
    expect(lastEmail.text).toBe("Ultimo email - teste de corpo\n");
  });
});
