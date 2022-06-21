import { RequestButton } from "./components/RequestButton";
import { RecordsButton } from "./components/RecordsButton";
import { GlobalStyle } from "./styles/global";
import { RecordsTable } from "./components/RecordsTable";

export function App() {
  return (
    <>
      <RequestButton />
      <RecordsButton />
      <RecordsTable />
      <GlobalStyle />
    </>
  );
}


