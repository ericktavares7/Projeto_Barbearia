import { scheduleFetchByDay } from "../../../services/schedule-fetch-by-day.js"; "../../services/schedule-fetch-by-day.js";
import { hoursLoad } from "../hours-load.js";
import {schedulesShow} from "../schedules/show.js";

//Selecionar o input de data
const selectedDate = document.getElementById("date")

export async function schedulesDay(){
 //Obtem a data selecionada

  const date = selectedDate.value;

  //Buscar na API os agendamento do dia selecionado
  const dailySchedules = await scheduleFetchByDay({ date });

  schedulesShow({dailySchedules})
  
// Renderiza as horas disponiveis para a data selecionada
  hoursLoad({ date, dailySchedules });
}