function status(request, response) {
  response.status(200).json({ chave: "Ola api" });
}

export default status;
