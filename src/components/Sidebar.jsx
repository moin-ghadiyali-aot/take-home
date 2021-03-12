import styled from 'styled-components'

const Sidebar = () => {
  return (
    <Container>
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
    </Container>
  )
}

export default Sidebar

const Container = styled.aside`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border-left: 1px solid #eee;
`
const Title = styled.h1`
  padding: 2rem;
`

const Card = styled.div`
  background-color: var(--grey);
`

const CountryHeading = styled.h2``

const DetailsHeading = styled.h3``

const Company = styled.p``
const Address = styled.p``
const DateHeading = styled.h3``
const Date = styled.p``
const ViewTrip = styled.button`
  border-radius: 5px;
`
