import { IMAGE_CDN } from "@/services/constant";

export default function MovieCard({
  img,
  title,
}: {
  title: string;
  img: string;
}) {
  return (
    <div className="min-w-[12%]">
      <img
        alt={title}
        className="rounded-md"
        src={`${IMAGE_CDN}/w220_and_h330_face/${img}.jpg`}
      />
    </div>
  );
}
