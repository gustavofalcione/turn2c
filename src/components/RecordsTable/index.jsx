import { useContext } from "react"
import { CharactersContext } from "../../contexts/CharactersContext";
import { Container, Content } from "./styles"

export function RecordsTable() {
  const { characters } = useContext(CharactersContext);
  console.log(characters)

  return(
    <Container>
      <Content>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>SPECIES</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {characters.map(character => {
              return (
                <tr key={character.id}>
                  <td>{character.id}</td>
                  <td>{character.name}</td>
                  <td>{character.species}</td>
                  <td>{character.status}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </Content>
    </Container>
  )
}