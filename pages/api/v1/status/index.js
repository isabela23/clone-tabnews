import { createRouter } from "next-connect";
import database from "infra/database.js";
import controller from "infra/controller.js";
const router = createRouter();

router.get(getHandler);

export default router.handler(controller.errorHandlers);

async function getHandler(request, response) {
  const updateAt = new Date().toISOString();
  const versaoPostgres = await database.query(
    "SELECT current_setting('server_version') as versao_postgres;",
  );
  const databaseName = process.env.POSTGRES_DB;
  const numeroConexoes = await database.query({
    text: "SELECT COUNT(*)::int AS total_conexoes_db FROM pg_stat_activity WHERE datname=$1;",
    values: [databaseName],
  });
  const numeroConexoes_max = await database.query("SHOW max_connections;");

  response.status(200).json({
    update_at: updateAt,
    dependencies: {
      database: {
        version: versaoPostgres.rows[0].versao_postgres,
        max_connections: parseInt(numeroConexoes_max.rows[0].max_connections),
        opened_connections: numeroConexoes.rows[0].total_conexoes_db,
      },
    },
  });
}
