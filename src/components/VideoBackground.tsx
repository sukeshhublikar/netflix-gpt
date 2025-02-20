import { useFetch } from "@/hooks/useFetch";
import { useMemo } from "react";

export default function VideoBackground({ movieId }: { movieId: number }) {
  const {
    data,
    loader,
  }: {
    data: { results: Array<any> } | null;
    loader: boolean;
    error: string | null;
  } = useFetch(
    "https://api.themoviedb.org/3/movie/939243/videos?language=en-US"
  );
  const video = useMemo(() => {
    if (data && !loader) {
      const video = data.results.find((item: any) => item.type === "Trailer");
      if (video) {
        return data.results[0];
      }
      return video;
    }
    return null;
  }, [data, loader]);
  console.log(video);
  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src="https://www.youtube.com/embed/MbohuBUxcRU?autoplay=1&mute=1&loop=1&showinfo=0&controls=0"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}
