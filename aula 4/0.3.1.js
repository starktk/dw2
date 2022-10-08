const filmes = [
  {
    nome: 'O Senhor do Aneis: A Sociedade do Anel',
    lancamento: 2002,
    diretores: ['Peter Jackson'],
    generos: ['Fantasia', 'Aventura'],
  },
  {
    nome: 'Harry Potter e a Pedra Filosofal',
    lancamento: 2001,
    diretores: ['Chris Columbus'],
    generos: ['Fantasia'],
  },
  {
    nome: 'Matrix',
    lancamento: 1999,
    diretores: ['Lana Wachowski', 'Lilly Wachowski'],
    generos: ['Ação', 'Ficção Cientifica'],
  }
]



  
  const A1 = filmes.map((filmes) => {
  return {
    titulo: filmes.nome,
    ano: filmes.lancamento,
  };
});

 const A2 = filmes.map((index) => {
   const id = index +1;
  return {
     id,
   };
 });

 console.log(A1);
