import { apiConfig } from "../services/api.config";
import dayjs from "dayjs";

export async function scheduleFetchByDay({ date }) {

  try {
    //Fazendo a requisição para o backend, buscando os agendamento do dia
    const response = await fetch(`${apiConfig.baseURL}/schedules`)

    const data = await response.json()


    const dailySchedules = data.filter((schedule) => {
      const dateOriginal = dayjs(date).format("YYYY-MM-DD");
      const dateServer = dayjs(schedule.when).format("YYYY-MM-DD");

      console.log(`Comparando: ${dateOriginal} com ${dateServer}`);
      return dateOriginal === dateServer;
    });

    console.log("Resultado final do filtro:", dailySchedules);
    return dailySchedules;

  } catch (error) {
    console.error(error);
    alert("Erro ao buscar os agendamento do dia")
  }
}