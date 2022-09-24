const tarefas = [
  {
    titulo: 'Passear com o cachorro',
    concluida: false,
		dias: 10,
  },
  {
    titulo: 'Comprar leite',
    concluida: false,
		dias: 5,
  },
  {
    titulo: 'Lavar louça',
    concluida: true,
		dias: 60,
  }
]

function filtrarconcluidas () {
  const  concluidas = tarefas.filter(({concluida}) => concluida === true);
  return filtrarconcluidas;
}

function filtrarnaoconcluidas  () {
  const Nconcluidas = tarefas.filter(({concluida}) => concluida === false);
  return filtrarnaoconcluidas;
}



function filtrartrindaD () {
  const trintadays = tarefas.filter(({dias}) => dias < 30 );
}

console.log(filtrarconcluidas);