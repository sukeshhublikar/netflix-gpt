import { IMAGE_CDN } from "@/services/constant";
import { useRef } from "react";
import NoImage from "@/assets/220x330_no_image.svg";
export default function MovieCard({
  img,
  title,
  backdropImg,
}: {
  title: string;
  img: string;
  backdropImg: string;
}) {
  const ref = useRef(null);
  if (img === null) {
    img = backdropImg;
  }
  return (
    <div className=" lg:min-w-[12%] min-w-[24%] max-sm:min-w-[50%]">
      <img
        ref={ref}
        alt={title}
        className="rounded-md"
        src={`${IMAGE_CDN}/w220_and_h330_face/${img}.jpg`}
        onError={() => {
          if (ref.current) {
            if (backdropImg !== null) {
              (
                ref.current as HTMLImageElement
              ).src = `${IMAGE_CDN}/w220_and_h330_face/${backdropImg}.jpg`;
            }
            (ref.current as HTMLImageElement).src = NoImage;
          }
        }}
      />
    </div>
  );
}
