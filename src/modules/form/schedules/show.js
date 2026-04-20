import dayjs from "dayjs";
import { scheduleCancel } from "../../../services/schedule-cancel.js";
import { schedulesDay } from "../schedules/load.js";

//Selecionar as sessoes manha, tarde e noite
const periodMorning = document.getElementById("period-morning")
const periodAfternoon = document.getElementById("period-afternoon")
const periodNight = document.getElementById("period-night")

export function schedulesShow({ dailySchedules }) {
  try {
    //Limpar as listas
    periodMorning.innerHTML = "";
    periodAfternoon.innerHTML = "";
    periodNight.innerHTML = "";

    //Renderiza os agendamento por periodo
    dailySchedules.forEach((schedule) => {
      const item = document.createElement("li");
      const time = document.createElement("strong");
      const name = document.createElement("span");

      //Adicionar o id do agendamento.
      item.setAttribute("data-id", schedule.id)

      time.textContent = dayjs(schedule.when).format("HH:mm");
      name.textContent = schedule.name;

      //Criar icone de cancelar
      const cancelIcon = document.createElement("img");
      cancelIcon.classList.add("cancel-icon");
      cancelIcon.setAttribute("src", "./src/assets/cancel.svg");
      cancelIcon.setAttribute("alt", "Cancelar");


      //Adiconar o tempo ,nome e icone de cancelar no item da lista
      item.append(time, name, cancelIcon);

      //Obtem a hora do agendamento para definir o periodo
      const hour = dayjs(schedule.when).hour();

      //renderizar o agendamento na sessao (manha , tarde ou noite)
      if (hour <= 12) {
        periodMorning.appendChild(item);
      } else if (hour > 12 && hour <= 18) {
        periodAfternoon.appendChild(item);
      } else {
        periodNight.appendChild(item);
      }
    });
  } catch (error) {
    alert("Ocorreu um erro ao carregar os agendamentos.")
  }
}
