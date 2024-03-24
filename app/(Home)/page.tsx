import Link from 'next/link';
import { env } from 'process';
import styles from '../../styles/Home.module.css';
import Movie from '../../components/movie';

export const metadata = {
  title: 'Home Page',
};

// export const API_URL = 'https://nomad-movies.nomadcoders.workers.dev/movies';

async function getMovies() {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(process.env.API_URL);
  const json = await response.json();

  return json;
}

export default async function Page() {
  const movies = await getMovies();

  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
        />
        // <li key={movie.id}>
        //   <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        // </li>
      ))}
    </div>
  );
}
