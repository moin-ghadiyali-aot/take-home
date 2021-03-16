import {useState} from 'react'
import styled from 'styled-components'

import { device } from 'style/responsive'
import SidebarHeading from 'components/SidebarHeading'

const Sidebar = ({ sidebarHeading, children }) => {

  return (
    <Container>
      <SidebarHeading title={sidebarHeading} />
        {children}
    </Container>
  )
}

export default Sidebar

const Container = styled.aside`
  display: flex;
  flex-direction: column;
  min-width: 320px;
  border-left: 1px solid #f1f1f2;
  padding: 3rem 4rem;
  max-width: 340px;
  font-size: 1.6rem;
  line-height: 1.5;
  color: #63666a;

  @media ${device.laptop} {
    display: none;
  }
`
