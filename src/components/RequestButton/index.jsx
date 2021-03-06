import { useContext } from "react";
import { CharactersContext } from "../../contexts/CharactersContext";

import { Button, Container, Content } from "./styles"


export function RequestButton() {
  
  const { setCharacters, setIsCharacterRenderized, isButtonDisabled,setIsButtonDisabled } = useContext(CharactersContext);

  function handleApiRequest() {
    fetch('https://rickandmortyapi.com/api/character/')
      .then(response => response.json())
      .then(data => setCharacters(data.results))

      setIsCharacterRenderized(true);
      setIsButtonDisabled(true);
  }
  
  return(
    <Container>
      <Content>
        <Button 
          type="submit"
          onClick={handleApiRequest}
          disabled={isButtonDisabled}
        >
          Chamar Requisição
        </Button>
      </Content>
    </Container>
  )
}