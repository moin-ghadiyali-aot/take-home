import styled from 'styled-components'
import { useContext } from 'react'
import moment from 'moment'
import { TripContext } from 'contexts/TripContext'
import SidebarHeading from 'components/SidebarHeading'
import { device } from 'style/responsive'
import Loader from 'react-loader-spinner'
import SidebarTripRow from 'components/SidebarTripRow'

const Sidebar = ({ sidebarHeading, children }) => {
  const [state, dispatch] = useContext(TripContext)
  //console.log('sidebar state', state)

  return (
    <Container>
      <SidebarHeading title={sidebarHeading} />
      {state.trips.length > 0 ? (
        state.trips.map(trip => (
          <SidebarTripRow
            key={trip.id}
            country={trip.address.country}
            company={trip.company_name}
            address={`${trip.address.street} ${trip.address.street_num} ${trip.address.zip} ${trip.address.city}`}
            date={`${moment(trip.start_date).format('D MMM')} - ${moment(
              trip.end_date,
            ).format('D MMM, YYYY')}`}
            id={trip.id}
          />
        ))
      ) : (
        <StyledLoader type="BallTriangle" color="var(--accent)" />
      )}{' '}
    </Container>
  )
}
export default Sidebar

const StyledLoader = styled(Loader)`
  display: flex;
  justify-content: center;
  margin: 50px;
`

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
