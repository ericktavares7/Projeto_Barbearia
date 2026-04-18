export function hoursClick() {
  const hours = document.querySelectorAll(".hour-available")

  hours.forEach(( available ) => {
    available.addEventListener("click", (selected) => {

    //remover a classe de selecionado para todas as horas disponiveis
      hours.forEach((hour) => {
        hour.classList.remove("hour-selected")
      })

      //adicionar a classe de selecionado somente para o item clicado
      selected.target.classList.add("hour-selected")
    })
  })
}