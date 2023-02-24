import { useDispatch, useSelector } from "react-redux";
import { type AppDispatchType, type RootStateType } from "../../store";
import { changeLang } from "./lang.slice";
import { IUseLang, LanguageKeyType } from "./langSlice.types";

export function useLang(): IUseLang {
  const { lang, currentLangKey } = useSelector(
    (state: RootStateType) => state.langReducer
  );
  const dispatch = useDispatch<AppDispatchType>();

  return {
    lang,
    currentLangKey,
    changeLanguage: (key: LanguageKeyType) => dispatch(changeLang(key)),
  };
}
