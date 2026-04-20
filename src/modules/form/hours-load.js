import dayjs from "dayjs"
import { hoursClick } from "./hours-click.js"

import { openingHours } from '../../utils/opening-hours.js';

const hour = document.getElementById("hours")

export function hoursLoad({ date, dailySchedules }) {

  //Limpar a lista de horários
  hours.innerHTML = ""
  //Obter as horas indisponiveis do dia selecionado
  const unavailableHours = dailySchedules.map((schedule) => dayjs(schedule.when).format("HH:mm")
)

console.log(unavailableHours)

  const opening = openingHours.map((hour) => {
    //recuperar somente hora
    const [scheduleHour] = hour.split(':')

    // adicionar a hora na data e verificar se é maior que a hora atual
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs())

    const available = !unavailableHours.includes(hour) && !isHourPast

    return {
      hour,
      available
    }
  })
  // renderizar as horas disponiveis

  opening.forEach(({ hour, available }) => {
    const li = document.createElement('li')

    li.classList.add('hour')
    li.classList.add(available ? 'hour-available' : 'hour-unavailable')
    li.textContent = hour

    if(hour === "09:00"){
      hourHeaderAdd('Manhã')
    } else if(hour === "13:00"){
      hourHeaderAdd('Tarde')
    }else if(hour === "18:00"){
      hourHeaderAdd('Noite')
    }

    hours.append(li)
  })

  //adionar o evento de click para as horas disponiveis
  hoursClick()
}


function hourHeaderAdd (title){
  const header = document.createElement('li')
  header.classList.add('hour-period')
  header.textContent = title

  hours.append(header)
}