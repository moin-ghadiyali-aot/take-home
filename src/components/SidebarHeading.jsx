import styled from 'styled-components'

const SidebarHeading = ({ title }) => <SidebarHeadingStyled>{title}</SidebarHeadingStyled>

const SidebarHeadingStyled = styled.div`
  font-size: 2.4rem;
  margin-bottom: 4rem;
  color: black;
`

export default SidebarHeading
