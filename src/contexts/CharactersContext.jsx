import { createContext, useState } from "react";

export const CharactersContext = createContext();


export const CharactersContextProvider = ({children}) => {
  const [characters, setCharacters] = useState([]);
  const [isCharacterRenderized, setIsCharacterRenderized] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  
  return(
    <CharactersContext.Provider 
      value={{
        characters, 
        setCharacters, 
        isCharacterRenderized, 
        setIsCharacterRenderized,
        isButtonDisabled,
        setIsButtonDisabled
      }}>

      {children}
    </CharactersContext.Provider>
  )
}