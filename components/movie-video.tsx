import styles from '../styles/movie-videos.module.css';
const API_URL = 'https://nomad-movies.nomadcoders.workers.dev/movies';

async function getVideos(id: string) {
  console.log(`Feting videos: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);

  return (
    <div className={styles.container}>
      {videos.map((video: any) => (
        <iframe
          key={video.id}
          src={`https://www.youtube.com/embed/${video.key}`}
          allowFullScreen
          title={video.name}
        />
      ))}
    </div>
  );
}
