import { Suspense } from 'react';
import MovieInfo from '../../../../components/movie-info';
import MovieVideos from '../../../../components/movie-video';

interface MovieDetailProps {
  params: { id: string };
  searchParams: string;
}
const API_URL = 'https://nomad-movies.nomadcoders.workers.dev/movies';

export const metadata = {
  title: '영화 상세 페이지',
};

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
