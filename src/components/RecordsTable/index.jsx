import { useEffect, useState } from "react"
import { Container, Content } from "./styles"

export function RecordsTable() {

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then(response => response.json())
      .then(data => setCharacters(data.results))
      // .then(data => console.log(data.results))
  }, []);

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
                <tr>
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