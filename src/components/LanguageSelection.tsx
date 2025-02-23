import { LANGUAGE_OPTIONS } from "@/services/constant";
import { RootState } from "@/store/appStore";
import { setLanguage } from "@/store/userSlice";
import { useDispatch, useSelector } from "react-redux";


export default function LanguageSelection() {
  const lang = useSelector((state: RootState) => state.user.language);
  const dispatch = useDispatch();

  return (
    <div>
      <select
        value={lang}
        name="en"
        id="en"
        className=" py-1 bg-black text-white border-white border px-1 rounded focus:outline-none"
        onChange={(e) => {
          dispatch(setLanguage(e.target.value));
        }}
      >
        {LANGUAGE_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
