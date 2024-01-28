import {useContext} from "react"
import {LocaleContext} from "../contexts/locale/LocaleProvider"

export const useLocale = () => {
  const {
    idioma,
    switcherLanguage,
  } = useContext(LocaleContext)
  return {
    idioma,
    switcherLanguage,
  };
};
