import styled from 'styled-components'

import { ReactComponent as RemoveIcon } from '../assets/Remove.svg'
import { ReactComponent as ArrowRight } from '../assets/ArrowRight.svg'

import { ReactComponent as AustriaFlag } from '../assets/flags/austria.svg'
import { ReactComponent as UnitedKingdomFlag } from '../assets/flags/united-kingdom.svg'

import { device } from '../style/responsive'

const FlagIcon = ({ flag }) => {
  if (flag === 'Austria') {
    return <AustriaFlag width={40} height={40} />
  } else if (flag === 'United Kingdom') {
    return <UnitedKingdomFlag width={40} height={40} />
  } else {
    return null
  }
}

const TripRow = ({ country, company, date, address }) => {
  return (
    <TripRowStyles>
      <FlagColumn>
        <FlagIcon width={40} height={40} flag={country} />
        <MobileCountry>{country}</MobileCountry>
      </FlagColumn>
      <TripColumn>
        <TripRowInline>
          <Country>{country}</Country>
          <Separator />
          <TripDate>
            <MobileLabel>Date</MobileLabel>
            <strong>{date}</strong>
          </TripDate>
        </TripRowInline>
        <TripRowInline>
          <Company>
            <MobileLabel>Company</MobileLabel>
            {company}
          </Company>
          <Separator />
          <Address>{address}</Address>
        </TripRowInline>
      </TripColumn>
      <ActionButtons>
        <RemoveButton>
          <RemoveIcon width={11} height={16} />
        </RemoveButton>
        <ViewButton>
          <MobileLabel>View Trip</MobileLabel>
          <ArrowRight width={16} height={10} />
        </ViewButton>
      </ActionButtons>
    </TripRowStyles>
  )
}

const TripRowStyles = styled.div`
  background: #f9f9fa;
  padding: 2rem;
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  width: 100%;
  border-radius: 10px;
  margin-bottom: 2rem;

  @media ${device.tablet} {
    display: block;
  }
`

const TripColumn = styled.div`
  margin-right: 2rem;

  @media ${device.tablet} {
    display: flex;
    flex-direction: column-reverse;
  }
`

const TripRowInline = styled.div`
  display: flex;
  margin-bottom: 1rem;

  &:last-child {
    margin: 0;
  }

  @media ${device.tablet} {
    margin-bottom: 0.5rem;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
`

const Separator = styled.div`
  width: 1px;
  margin: 0 2rem;
  height: 10px;
  background: #e4e4e5;

  @media ${device.tablet} {
    display: none;
  }
`

const FlagColumn = styled.div`
  display: block;
  margin-right: 2rem;

  @media ${device.tablet} {
    display: flex;
    align-items: center;

    > div {
      margin-left: 2rem;
      font-weight: 600;
    }
  }
`

const MobileCountry = styled.div`
  display: none;

  @media ${device.tablet} {
    display: block;
  }
`

const Country = styled.div`
  font-weight: 600;

  @media ${device.tablet} {
    display: none;
  }
`

const Company = styled.div`
  font-size: 1.4rem;

  @media ${device.tablet} {
    font-weight: 600;
  }
`

const MobileLabel = styled.div`
  display: none;

  @media ${device.tablet} {
    display: block;

    margin-top: 2rem;
    font-size: 1.2rem;
    color: #63666a;
    margin-bottom: 1rem;
    font-weight: 400;
  }
`

const TripDate = styled.div`
  font-size: 1.4rem;
  color: #97999b;

  @media ${device.tablet} {
    color: black;
    order: 2;
  }
`

const Address = styled.div`
  font-size: 1.4rem;
  color: #97999b;

  @media ${device.tablet} {
    color: black;
    order: 1;
    line-height: 1.5;
  }
`

const ActionButtons = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`

const RemoveButton = styled.div`
  background: #fbebe9;
  padding: 1.6rem 2rem;
  border-radius: 10px;
  margin-left: 2rem;

  @media ${device.tablet} {
    display: none;
  }
`

const ViewButton = styled.div`
  background: #f1f1f2;
  padding: 1.6rem 2rem;
  border-radius: 10px;
  margin-left: 2rem;

  @media ${device.tablet} {
    display: flex;
    margin: 0;
    width: 100%;
    align-items: center;
    margin-top: 3rem;

    > div {
      margin: 0;
      font-size: 1.4rem;
      font-weight: 600;
    }

    > svg {
      margin-left: auto;
    }
  }
`

export default TripRow
