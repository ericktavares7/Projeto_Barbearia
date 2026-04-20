import { schedulesDay } from "./load.js";
import { scheduleCancel } from "../../../services/schedule-cancel.js";

const periods = document.querySelectorAll(".period");

periods.forEach((period) => {
  // Captura o clique no container pai (Manhã, Tarde ou Noite)
  period.addEventListener("click", async (event) => {
    
    // Verifica se o que foi clicado foi exatamente o ícone de cancelar
    if (event.target.classList.contains("cancel-icon")) {
      
      // Busca o <li> mais próximo do ícone clicado
      const item = event.target.closest("li");

      // Pega o ID que salvamos no Passo 1
      const { id } = item.dataset;

      if (id) {
        const isConfirm = confirm("Deseja cancelar esse agendamento?");

        if (isConfirm) {
          // Faz a requisição na API
          await scheduleCancel({ id });

          // Recarrega a lista para o item sumir da tela
          await schedulesDay();
        }
      }
    }
  });
});