import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  /* border: 1px solid red; */
`
export const Content = styled.div`
  margin: 2rem auto;
  max-width: 1120px;
  /* border: 1px solid #fff; */
  display: flex;
  justify-content: center;
`

export const Button = styled.button`
  width: 100%;
  max-width: 200px;
  height: 2.2rem;
  /* border: 1px solid red; */
  border-radius: 8px;
  background: transparent;
  border: 1px solid #fff;

  span { 
    font-size: .875rem;
    font-weight: 400;
    color: #fff;
  }

  &:hover {
    border: 1px solid #ff8c00;

    span {
      color: #ff8c00;
    }
  }
`