import { apiConfig } from "./api.config.js";


//Metodo para agendar um horário, recebe um objeto com id, nome e data/hora do agendamento, e faz uma requisição POST para a API, enviando os dados no corpo da requisição. Se a requisição for bem-sucedida, exibe um alerta de sucesso. Caso contrário, captura o erro, exibe no console e lança um novo erro com uma mensagem de falha.
export async function scheduleNew({id, name, when}) {
  try{
    // Requisição POST para a API, enviando os dados do agendamento no corpo da requisição
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify( {id, name, when} ),
  })
    alert("Horário agendado com sucesso!");
} catch (error) {
      console.error(error)
      throw new Error("Não foi possível agendar o horário");
  }
}