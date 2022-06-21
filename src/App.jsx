// import { RequestButton } from "./components/RequestButton";
// import { RecordsButton } from "./components/RecordsButton";
// import { RecordsTable } from "./components/RecordsTable";
import { GlobalStyle } from "./styles/global";
import { MappedRoutes } from "./routes";

export function App() {
  return (
    <>
      {/* <RequestButton />
      <RecordsButton />
      <RecordsTable /> */}
      <MappedRoutes />
      <GlobalStyle />
    </>
  );
}


