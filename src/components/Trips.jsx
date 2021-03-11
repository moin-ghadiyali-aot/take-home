import styled from 'styled-components'
import Tips from 'components/Tips'

const Trips = () => {
  return (
    <AllTrips>
      <Main>
        <Heading>Your trips</Heading>
      </Main>
      <Tips/>
    </AllTrips>
  )
}

export default Trips

const AllTrips = styled.section`
  display: flex;
`
const Main = styled.main`
  height: 100vh;
  width: 500px;
`
const Heading = styled.h1`
  padding: 2rem;
  border-bottom: 1px solid var(--grey)
`