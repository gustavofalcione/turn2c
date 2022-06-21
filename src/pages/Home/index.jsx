import { RequestButton } from "../../components/RequestButton";
import { RecordsButton } from "../../components/RecordsButton";
import { Linked } from "./styles";

export const Home = () => {
  return (
    <>
      <Linked to="/registros">
        <RequestButton />
      </Linked>
      <Linked to="/registros">
        <RecordsButton />
      </Linked>
    </>
  )
}