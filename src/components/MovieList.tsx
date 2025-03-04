import { Movie } from "@/store/moviesSlice";
import MovieCard from "./MovieCard";

export default function MovieList({
  title,
  movies = [],
  loading = true,
}: {
  title: string;
  movies: Array<Movie>;
  loading: boolean;
}) {
  if (loading) {
    return (
      <div className="flex flex-row w-full white gap-4 -ml-5">
        {[1, 2, 3, 4, 5].map((idx) => {
          return (
            <div
              key={idx}
              className="flex items-center justify-center h-40 mb-4 bg-gray-500 rounded-sm lg:min-w-[20%] min-w-[24%] max-sm:min-w-[50%] animate-pulse"
            >
              <svg
                className="w-10 h-10 text-gray-200 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 20"
              >
                <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
              </svg>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="px-1 mb-4">
      <h1 className="text-2xl text-white py-2.5"> {title}</h1>
      <div className="flex flex-row gap-2 overflow-x-scroll w-[calc(100%-1rem)] pb-1.5">
        {movies?.map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              title={movie.title}
              img={movie.poster_path}
              backdropImg={movie.backdrop_path}
            />
          );
        })}
      </div>
    </div>
  );
}
