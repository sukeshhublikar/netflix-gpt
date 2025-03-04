import { useFetch } from "@/hooks/useFetch";
import { Movie } from "@/store/moviesSlice";
import { useMemo } from "react";

export default function VideoBackground({ movieId }: { movieId: number }) {
  const {
    data,
    loader,
  }: {
    data: { results: Array<Movie> } | null;
    loader: boolean;
    error: string | null;
  } = useFetch(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`
  );
  const video = useMemo(() => {
    if (data && !loader) {
      const video = data.results.find((item: Movie) => item.type === "Trailer");
      if (video) {
        return data.results[0];
      }
      return video;
    }
    return null;
  }, [data, loader]);

  if (video === null) {
    return (
      <div className="w-screen aspect-video bg-gray-300 animate-pulse rounded-lg">
        <div className="w-full h-full bg-gray-400 rounded-lg"></div>
      </div>
    );
  }
  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${video?.key}?autoplay=1&mute=1&loop=1&showinfo=0&controls=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}
