import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
`
export const Content = styled.div`
  margin: 2rem auto;
  max-width: 1120px;
  display: flex;
  justify-content: center;
`

export const Button = styled.button`
  width: 100%;
  max-width: 250px;
  height: 3rem;
  border-radius: 8px;
  background: var(--buttonRequest);
  border: none;
  transition: filter .2s;

  span { 
    font-size: 1.2rem;
    font-weight: 500;
    color: #fff;
  }

  &:hover {
    filter: brightness(.8);
  }
`