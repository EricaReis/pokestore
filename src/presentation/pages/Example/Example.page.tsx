import { useLang } from "../../../data/store/slices/lang/useLang";
import { Container } from "./Example.styles";

export default function Example(): JSX.Element {
  const { lang, currentLangKey, changeLanguage } = useLang();

  return (
    <Container>
      <h1>Página de exemplo</h1>

      {/* exemplo de tradução com o hook de linguagem */}
      <li onClick={() => changeLanguage("pt")}>PT</li>
      <li onClick={() => changeLanguage("en")}>EN</li>

      <p>{lang.lang.app[currentLangKey]}</p>
    </Container>
  );
}
