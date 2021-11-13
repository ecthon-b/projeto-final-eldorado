const MoviesRepository = require('../repositories/MoviesRepository');

class MovieController {
  async index(request, response) {
    // Listar todos os registros
    const movies = await MoviesRepository.findAll();

    response.json(movies);
  }

  async show(request, response) {
    // Obter um registro
    let { id } = request.params;

    id = Number(id);

    const movie = await MoviesRepository.findById(id);

    if (!movie) {
      return response.status(404).json({ error: 'Movie not found' });
    }

    response.json(movie);
  }

  async store(request, response) {
    // Criar novo registro
    const {
      nome, sinopse, ano_lancamento, faturamento, poster, genero, created_at, updated_at,
    } = request.body;

    if (!nome) {
      return response.status(400).json({ error: 'Nome é obrigatório' });
    }

    if (!sinopse) {
      return response.status(400).json({ error: 'Sinopse é obrigatório' });
    }

    if (!ano_lancamento) {
      return response.status(400).json({ error: 'Ano de lancamento é obrigatório' });
    }

    if (!poster) {
      return response.status(400).json({ error: 'Url de Poster é obrigatório' });
    }

    if (!genero) {
      return response.status(400).json({ error: 'Genero é obrigatório' });
    }

    const movieExists = await MoviesRepository.findByName(nome);

    if (movieExists) {
      return response.status(400).json({ error: 'Filme já foi cadastrado' });
    }

    const movie = await MoviesRepository.create({
      nome, sinopse, ano_lancamento, faturamento, poster, genero, created_at, updated_at,
    });

    response.json(movie);
  }

  async update(request, response) {
    // Editar um registro
    let { id } = request.params;
    const {
      nome, sinopse, ano_lancamento, faturamento, poster, genero, created_at, updated_at,
    } = request.body;

    id = Number(id);

    const movieExists = await MoviesRepository.findById(id);
    if (!movieExists) {
      return response.status(404).json({ error: 'Movie not found' });
    }

    const movie = await MoviesRepository.update(id, {
      nome, sinopse, ano_lancamento, faturamento, poster, genero, created_at, updated_at,
    });

    response.json(movie);
  }

  async delete(request, response) {
    // Deleter um registro
    let { id } = request.params;

    id = Number(id);

    const movie = await MoviesRepository.findById(id);

    if (!movie) {
      return response.status(404).json({ error: 'Movie not found' });
    }

    await MoviesRepository.delete(id);

    response.sendStatus(204);
  }
}

module.exports = new MovieController();
