import { RootState } from "@/store/appStore";
import { lang } from "@/utils/languageConstants";
import { useSelector } from "react-redux";

export default function useFormatter() {
  const selectLang = useSelector((state: RootState) => state.user.language);
  //   const {formatMessage: f} = useIntl();
  function formatMessage({ id }: { id: string }) {
    if (typeof id === "string") {
      return (lang[selectLang][id] as string) || ("" as string);
    }
    return id as string;
  }
  return { formatMessage };
}
