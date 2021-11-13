let movies = [
  {
    id: 1,
    nome: 'King Kong',
    sinopse: 'Lorem Ipsum deuybnfyreudgvbrtufabdygfbeuadufbnuahifuheuaidjwuahifa',
    ano_lancamento: 2005,
    faturamento: 14345932.79,
    poster: 'https://linkimagem',
    genero_id: 1,
    created_at: 20211112,
    updated_at: 20211112,
  },
  {
    id: 2,
    nome: 'Vingadores',
    sinopse: 'Lorem Ipsum deuybnfyreudgvbrtufabdygfbeuadufbnuahifuheuaidjwuahifa',
    ano_lancamento: 2012,
    faturamento: 154895178812.48,
    poster: 'https://linkimagem',
    genero_id: 2,
    created_at: 20211112,
    updated_at: 20211112,
  },
  {
    id: 3,
    nome: 'Os infiltrados',
    sinopse: 'Lorem Ipsum deuybnfyreudgvbrtufabdygfbeuadufbnuahifuheuaidjwuahifa',
    ano_lancamento: 2006,
    faturamento: 1589517575.15,
    poster: 'https://linkimagem',
    genero_id: 3,
    created_at: 20211112,
    updated_at: 20211112,
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => resolve(movies));
  }

  findById(id) {
    return new Promise((resolve) => resolve(
      movies.find((movie) => movie.id === id),
    ));
  }

  findByName(name) {
    return new Promise((resolve) => resolve(
      movies.find((movie) => movie.nome === name),
    ));
  }

  delete(id) {
    return new Promise((resolve) => {
      movies = movies.filter((movie) => movie.id !== id);
      resolve();
    });
  }

  create({
    nome, sinopse, ano_lancamento, faturamento, poster, genero, created_at, updated_at,
  }) {
    return new Promise((resolve) => {
      const newMovie = {
        id: 4,
        nome,
        sinopse,
        ano_lancamento,
        faturamento,
        poster,
        genero,
        created_at,
        updated_at,
      };
      movies.push(newMovie);
      resolve(newMovie);
    });
  }

  update(id, {
    nome, sinopse, ano_lancamento, faturamento, poster, genero, created_at, updated_at,
  }) {
    return new Promise((resolve) => {
      const updatedMovie = {
        id,
        nome,
        sinopse,
        ano_lancamento,
        faturamento,
        poster,
        genero,
        created_at,
        updated_at,
      };

      movies = movies.map((movie) => (
        movie.id === id ? updatedMovie : movie
      ));
      resolve(updatedMovie);
    });
  }
}

module.exports = new ContactsRepository();
