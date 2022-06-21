import { RequestButton } from "../../components/RequestButton";
import { RecordsButton } from "../../components/RecordsButton";
import { RecordsLink } from "./styles";

export const Home = () => {
  return (
    <>
      <RequestButton />
      <RecordsLink to="/registros">
        <RecordsButton />
      </RecordsLink>
    </>
  )
}