import { Suspense } from 'react';
import MovieInfo, { getMovie } from '../../../../components/movie-info';
import MovieVideos from '../../../../components/movie-video';

interface MovieDetailProps {
  params: { id: string };
  searchParams: string;
}
const API_URL = 'https://nomad-movies.nomadcoders.workers.dev/movies';

export async function generateMetadata({ params: { id } }: MovieDetailProps) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
    description: 'This is a movie detail page',
  };
}

export default async function MovieDetail(props: MovieDetailProps) {
  const { id } = props.params;
  const { searchParams } = props;

  return (
    <div>
      <p>영화 상세 페이지</p>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie detail</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
