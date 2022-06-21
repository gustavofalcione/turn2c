import { RecordsTable } from "../../components/RecordsTable"
import { useContext } from "react";
import { CharactersContext } from "../../contexts/CharactersContext";
import { Container, Content, Button, Linked } from "./styles";

export const Records = () => {
  const { characters, isCharacterRenderized } = useContext(CharactersContext);
  console.log(characters.lenght)

  if(isCharacterRenderized) {
    return (
      <RecordsTable />
    ) 
  }else {
    return (
      <Container>
        <Content>
          <h1>Algum problema ocorreu, você deve realizar a requisição para obter a relação de personagens</h1>
          <Linked to="/">
            <Button>Voltar para home</Button>
          </Linked>
        </Content>
      </Container>
    )
  }
  


}