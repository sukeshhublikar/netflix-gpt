import { useFetch } from "@/hooks/useFetch";
import MovieList from "./MovieList";

export default function MoviesContainer({
  url,
  title = "",
}: {
  url: string;
  title: string;
}) {
  const {
    data,
    loader,
  }: {
    data: { results: Array<any> } | null;
    loader: boolean;
    error: string | null;
  } = useFetch(url);

  return (
    <MovieList title={title} movies={data?.results || []} loading={loader} />
  );
}
