import { InfoIcon, PlayIcon } from "@/common/Icons";
import { IMAGE_CDN } from "@/services/constant";

export default function VideoTitle({
  title,
  overview,
  img,
}: {
  title: string;
  overview: string;
  img: string;
}) {
  return (
    <div className="pl-8 lg:top-[20%] top-[50%] absolute text-white">
      <img
        className="rounded-md h-[200px] ml-8 max-sm:hidden min-sm:hidden min-lg:hidden"
        src={`${IMAGE_CDN}/w220_and_h330_face/${img}.jpg`}
      />
      <h1 className="text-4xl font-bold mt-4 max-sm:p-1  max-sm:text-sm">
        {title}
      </h1>
      <h4 className="text-lg w-[45%] mt-2 hidden lg:block">{overview}</h4>
      <div className="flex gap-4 mt-4">
        <button
          className="flex items-center gap-2 bg-white text-black border px-4 py-2 rounded hover:bg-opacity-60 hover:bg-black hover:text-white text-xl  max-sm:p-1  max-sm:text-sm"
          onClick={undefined}
        >
          <PlayIcon />
          <span>Play</span>
        </button>
        <button
          className="flex items-center gap-2 border px-4 py-2 rounded text-white bg-black bg-opacity-50 text-xl hover:bg-black max-sm:hidden sm:hidden"
          onClick={undefined}
        >
          <InfoIcon />
          <span>More Info</span>
        </button>
      </div>
    </div>
  );
}
