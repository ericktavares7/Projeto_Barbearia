import { hoursLoad } from "../hours-load.js";

//Selecionar o input de data
const selectedDate = document.getElementById("date")

export function schedulesDay(){
 //Obtem a data selecionada

  const date = selectedDate.value;
// renderiza as horas disponiveis para a data selecionada
  hoursLoad({ date });
}