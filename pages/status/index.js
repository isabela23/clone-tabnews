import useSWR from "swr";

async function fetchAPI(key) {
  const response = await fetch(key);
  const responseBody = await response.json();
  return responseBody;
}

export default function StatusPage() {
  return (
    <>
      <h1>Status</h1>
      <UpdateAt />
      <Dependencies />
    </>
  );
}

function UpdateAt() {
  const { isLoading, data } = useSWR("/api/v1/status", fetchAPI, {
    refreshInterval: 2000,
  });
  let updateAtText = "Carregando...";
  if (!isLoading && data) {
    updateAtText = new Date(data.update_at).toLocaleDateString("pt-BR");
  }
  return <div>Última atualização: {updateAtText} </div>;
}

function Dependencies() {
  const { isLoading, data } = useSWR("/api/v1/status", fetchAPI, {
    refreshInterval: 2000,
  });
  let database_version = "Carregando...";
  let database_max_connections = "Carregando...";
  let database_opened_connections = "Carregando...";

  if (!isLoading && data) {
    database_version = new String(data.dependencies.database.version);
    database_max_connections = new String(
      data.dependencies.database.max_connections,
    );
    database_opened_connections = new String(
      data.dependencies.database.opened_connections,
    );
  }
  return (
    <div>
      <br></br> Informações do Banco: <br></br>
      <ul>
        <li>Versão: {database_version} </li>
        <br></br>
        <li>Máximo de conexão:{database_max_connections} </li>
        <br></br>
        <li>Conexões abertas: {database_opened_connections} </li>
      </ul>
    </div>
  );
}
