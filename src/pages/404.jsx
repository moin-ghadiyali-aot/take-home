import React from 'react'
import styled from 'styled-components'

const NotFound = () => {
  return <NotFoundStyled>Page not found</NotFoundStyled>
}

const NotFoundStyled = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
`

export default NotFound
