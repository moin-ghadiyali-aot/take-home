import styled from 'styled-components'
import Heading from '../components/Heading'
import TripRow from '../components/TripRow'

import Sidebar from 'components/Sidebar'

const Trips = () => {
  return (
    <Container>
      <Main>
        <Heading title="Your trips" />
        <AllTrips>
          <TripRow
            country="Austria"
            company="Diamler AG"
            address="Mercedes-Benz Plant Berlin' Daimlerstraße 143, 12277 Berlin"
            date="Jul 14 - Sep 20, 2019"
          />
          <TripRow
            country="United Kingdom"
            company="Diamler AG"
            address="Mercedes-Benz Plant Berlin' Daimlerstraße 143, 12277 Berlin"
            date="Jul 14 - Sep 20, 2019"
          />
        </AllTrips>
      </Main>
      <Sidebar sidebarHeading="Tips & tricks">
        Company was established back in the year 2007 by 3 friends who were
        fascinated by the web and mobile technologies and product design. Today,
        Cleevio is lead by its own CEO, David Bezdeka, and is working on
        projects for clients and companies around the world. With his work he
        helps with the product itself, starting startups or understanding how to
        manage and deliver a large-scale solution. Cleevio‘s people come from a
        diverse environment, but they work like a well-coordinated team at work.
        During development, they use new technologies and libraries, always
        striving to uplevel. They work side-by-side with clients as a partner
        and they are their digital expert. They advise and influence the design
        and strategy of the project. They are looking for bold clients who are
        leaders in their field and have innovative, creative ideas. They are
        attracted to projects which utilize new technologies.
      </Sidebar>
    </Container>
  )
}

export default Trips

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  width: 100%;
  height: 100vh;
`

const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
`

const AllTrips = styled.section`
  width: 100%;
  padding: 2rem;
`
