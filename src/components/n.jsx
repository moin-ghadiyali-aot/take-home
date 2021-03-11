import styled from 'styled-components'
const TripsSidebar = () => {
  return (
    <Sidebar>
      <Title></Title>
      <Card>
        <CountryHeading></CountryHeading>
        <DetailsHeading></DetailsHeading>
        <Company></Company>
        <Address></Address>

        <DateHeading></DateHeading>
        <Date></Date>

        <ViewTrip>View Trip</ViewTrip>
      </Card>
    </Sidebar>
  )
}

export default TripsSidebar

const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`
const Title = styled.h1`
  padding: 2rem;
`

const Card = styled.div`
  background-color: var(--grey);
`

const CountryHeading = styled.h2`

`

const DetailsHeading = styled.h3`

`

const Company = styled.p`

`
const Address = styled.p`

`
const DateHeading = styled.h3`

`
const Date = styled.p`

`
const ViewTrip = styled.button`
  border-radius: 5px;
`
