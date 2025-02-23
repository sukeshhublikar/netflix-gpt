import useFormatter from "@/hooks/useFormatter";
import { AppDispatch } from "@/store/appStore";
import { toggleGptSearch } from "@/store/gptSlice";
import { useDispatch } from "react-redux";

export default function GPTSearchButton() {
  const dispatch: AppDispatch = useDispatch();
  const { formatMessage: f } = useFormatter();
  return (
    <button
      className="border border-gray-300 text-gray-300 px-[0.5em] py-[0.2em] rounded whitespace-nowrap hover:bg-[#3a8ceb] hover:text-white transition-colors duration-300 ease-in-out origin-left"
      onClick={() => dispatch(toggleGptSearch())}
    >
      {f({ id: "GPTSearch" })}
    </button>
  );
}
