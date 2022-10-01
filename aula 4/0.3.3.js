const medicos = [
  {
    nome: 'Leticia',
    sobrenome: 'Costana',
    genero: 'feminino',
  },
  {
    nome: 'Adimaldo',
    sobrenome: 'Pinto',
    genero: 'masculino',
  },
  {
    nome: 'Noah',
    sobrenome: 'Lutus',
    genero: 'nao-binario',
  },
]
function Galadriel = {
  const array = [];

  medicos.forEach(({ genero, nome, sobrenome }) => {
    if (genero === 'masculino') {
      array.push('Dr. ' + nome + ' ' + sobrenome);
    } else if (genero === 'feminino') {
      array.push('Dr(a) ' + nome + ' ' + sobrenome);
    } else {
      array.push('Dr(e) ' + nome + ' ' + sobrenome);
    }
  });

  return array;
}

console.log(Galadriel);
