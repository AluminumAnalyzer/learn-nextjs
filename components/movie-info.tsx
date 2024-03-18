const API_URL = 'https://nomad-movies.nomadcoders.workers.dev/movies';

async function getMovies(id: string) {
  console.log(`Feting movies: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 10000));
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovies(id);

  return <h6>{JSON.stringify(movie)}</h6>;
}
