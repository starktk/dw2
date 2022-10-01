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
  return concluidas;
}


function filtrarnaoconcluidas  () {
  const Nconcluidas = tarefas.filter(({concluida}) => concluida === false);
  return Nconcluidas.length;
}



function filtrartrintaD () {
  const trintadays = tarefas.filter(({dias}) => dias < 30 );
  return trintadays;
}

console.log(filtrarnaoconcluidas());