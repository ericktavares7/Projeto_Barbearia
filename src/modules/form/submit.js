import dayjs from "dayjs"

const form = document.querySelector("form")
const ClientName = document.getElementById("client")
const selectedDate = document.getElementById("date")

//Data atual para o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

//Carrega a data atual no campo de data
selectedDate.value = inputToday

//Definir a data minima como a data atual
selectedDate.min = inputToday

form.onsubmit = (event) => {
  event.preventDefault()

  try {
    //recuperando o nome do cliente
    const name = ClientName.value.trim()

    if (!name) {
     return alert("Por favor, insira o nome do cliente.")
    }

    //recuperar o horário selecionado
    const hourSelected = document.querySelector(".hour-selected")
    console.log(hourSelected)

    //recuperar se o horario não for selecionado
    if (!hourSelected) {
      return alert("Por favor, selecione um horário.")
    }

    const [hour] = hourSelected.innerText.split(":")
    
    //Inserir a hora na data
    const when = dayjs(selectedDate.value).add(hour, "hour")

    //Gerar um ID único para o agendamento
    const id = new Date().getTime()

  } catch (error) {
    alert("Não foi possível fazer o agendamento.")
    console.log(error)
  }
}