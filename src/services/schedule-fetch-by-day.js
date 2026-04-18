export async function scheduleFetchByDay({day}) {

  try{
    //Fazendo a requisição para o backend, buscando os agendamento do dia
    const response = await fetch(`${apiConfig.baseURL}/schedules`)

    const data = await response.json()

    const dailySchedules = data.filter((schedule) => dayjs(date).isSame(schedule.when, "day"))

    return dailySchedules

  }catch(error){
  alert("Erro ao buscar os agendamento do dia")
  }
}