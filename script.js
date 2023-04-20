function adicionarDisciplina() {
    const disciplina = document.getElementById("disciplina").value;
    const nota = document.getElementById("nota").value;
    const frequencia = document.getElementById("frequencia").value;
  
    const listaDisciplinas = document.getElementById("lista-disciplinas");
  
    const novaDisciplina = document.createElement("li");
    const nomeDisciplina = document.createElement("h2");
    const listaNotas = document.createElement("ul");
    const notaItem = document.createElement("li");
    const frequenciaItem = document.createElement("li");
  
    nomeDisciplina.textContent = disciplina;
    notaItem.textContent = `Nota: ${nota}`;
    notaItem.className = 'nota'
    frequenciaItem.textContent = `Frequência: ${frequencia}%`;
    frequenciaItem.className = 'frequencia'

    listaNotas.appendChild(notaItem);
    listaNotas.appendChild(frequenciaItem);
    listaNotas.className = 'sublista'

    

  
    novaDisciplina.appendChild(nomeDisciplina);
    novaDisciplina.appendChild(listaNotas);
    if(Number(nota) < 6 || Number(frequencia) <75){
        novaDisciplina.className = 'nota-frequencia-baixa'
    }else{
        novaDisciplina.className = 'nota-frequencia-alta'
    }
  
    listaDisciplinas.appendChild(novaDisciplina);
  }