import styled from 'styled-components'

const SidebarHeading = ({ title }) => {
  return <SidebarHeadingStyled>{title}</SidebarHeadingStyled>
}

const SidebarHeadingStyled = styled.div`
  font-size: 2.4rem;
  margin-bottom: 4rem;
`

export default SidebarHeading
