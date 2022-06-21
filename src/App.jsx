import { GlobalStyle } from "./styles/global";
import { MappedRoutes } from "./routes";
import { CharactersContextProvider } from "./contexts/CharactersContext";

export function App() {
  return (
    <>
      <CharactersContextProvider>
        <MappedRoutes />
        <GlobalStyle />
      </CharactersContextProvider>
    </>
  );
}


