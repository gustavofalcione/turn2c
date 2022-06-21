import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
`
export const Content = styled.div`
  margin: 2rem auto;
  max-width: 1120px;
  display: flex;
  justify-content: center;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;
    font-family: 'Poppins', sans-serif;
    
    th {
      color: var(--buttonRequest);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      background: transparent;
      border: 1px solid #fff;
      color: var(--shape-light);
      border-radius: 0.25rem;
      color: #c0c0c0;

      &:first-child {
        color:#DCDCDC;
        font-weight: 600;
      } 
    }
  }
`