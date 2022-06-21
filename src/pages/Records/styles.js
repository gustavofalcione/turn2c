import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
`
export const Content = styled.div`
  margin: 2rem auto;
  max-width: 1120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  h1 {
    margin-top: 2rem;
    font-size: 1rem;
  }
`

export const Button = styled.button`
  width: 100%;
  padding: 0 2rem;
  max-width: 250px;
  height: 3rem;
  border-radius: 8px;
  background: var(--buttonRequest);
  border: none;
  transition: filter .2s;
  font-size: 1.1rem;
  font-weight: 500;
  color: #fff;

  &:hover {
    filter: brightness(.8);
  }
`

export const Linked = styled(Link)`
  text-decoration: none;
`