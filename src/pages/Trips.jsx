import styled from 'styled-components'
import Tips from 'pages/Tips'
import Heading from '../components/Heading'
import TripRow from '../components/TripRow'

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
