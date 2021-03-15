import { useContext } from "react";
import styled from 'styled-components'
import {TripContext} from 'contexts/TripContext'

import { ReactComponent as RemoveIcon } from 'assets/Remove.svg'
import { ReactComponent as ArrowRight } from 'assets/ArrowRight.svg'
import { ReactComponent as AustriaFlag } from 'assets/flags/austria.svg'
import { ReactComponent as ChinaFlag } from 'assets/flags/china.svg'
import { ReactComponent as FranceFlag } from 'assets/flags/france.svg'
import { ReactComponent as GreeceFlag } from 'assets/flags/greece.svg'
import { ReactComponent as ItalyFlag } from 'assets/flags/italy.svg'
import { ReactComponent as NetherlandsFlag } from 'assets/flags/netherlands.svg'
import { ReactComponent as PortugalFlag } from 'assets/flags/portugal.svg'
import { ReactComponent as SpainFlag } from 'assets/flags/spain.svg'
import { ReactComponent as SlovakiaFlag } from 'assets/flags/slovakia.svg'
import { ReactComponent as SwedenFlag } from 'assets/flags/sweden.svg'
import { ReactComponent as UnitedKingdomFlag } from 'assets/flags/united-kingdom.svg'

import { device } from 'style/responsive'

const FlagIcon = ({ flag }) => {
  switch (flag) {
    case 'Austria':
      return <AustriaFlag width={40} height={40}/>
    case 'China':
      return <ChinaFlag width={40} height={40} />
    case 'France':
      return <FranceFlag width={40} height={40} />
    case 'Greece':
      return <GreeceFlag width={40} height={40} />
    case 'Italy':
      return <ItalyFlag width={40} height={40} />
    case 'Netherlands':
      return <NetherlandsFlag width={40} height={40} />
    case 'Portugal':
      return <PortugalFlag width={40} height={40} />
    case 'Slovakia':
      return <SlovakiaFlag width={40} height={40} />
    case 'Spain':
      return <SpainFlag width={40} height={40} />
    case 'Sweden':
      return <SwedenFlag width={40} height={40} />
    case 'United Kingdom':
      return <UnitedKingdomFlag width={40} height={40} />
    default:
      return null
    }
  }

  
  const TripRow = ({ country, company, date, id, address }) => {

    const {removeTrip} = useContext(TripContext)

    return (
    <TripRowStyles>
      <FlagColumn>
        <FlagIcon flag={country} />
        <MobileCountry>{country}</MobileCountry>
      </FlagColumn>
      <TripColumn>
        <TripRowInline>
          <Country>{country}</Country>
          <Separator />
          <TripDate>
            <MobileLabel>Date</MobileLabel>
            <strong><div className="innerWrapper">{date}</div></strong>
          </TripDate>
        </TripRowInline>
        <TripRowInline>
          <Company>
            <MobileLabel>Company</MobileLabel>
            {company}
          </Company>
          <Separator />
          <Address><div className="innerWrapper">{address}</div></Address>
        </TripRowInline>
      </TripColumn>
      <ActionButtons>
        <RemoveButton onClick={()=>removeTrip(id)}>
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
  min-width: 0;
  width: 100%;

  @media ${device.tablet} {
    display: flex;
    flex-direction: column-reverse;
    margin-right: 0;
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
  position: relative;
  top: 2px;

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
    margin: 0;

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
  white-space: nowrap;

  @media ${device.tablet} {
    display: none;
  }
`

const Company = styled.div`
  font-size: 1.4rem;
  white-space: nowrap;


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

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  min-width: 0;
  position: relative;
  height: 16px;
  width: 100%;

  > div.innerWrapper {
    display: inline-block;
    position: absolute;
    right: 0; 
    left: 0;
    top: 0;
    bottom: 0;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  @media ${device.tablet} {
    color: black;
    order: 2;
  }
`

const Address = styled.div`
  font-size: 1.4rem;
  color: #97999b;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  min-width: 0;
  position: relative;
  height: 16px;
  width: 100%;

  > div {
    display: inline-block;
    position: absolute;
    right: 0; 
    left: 0;
    top: 0;
    bottom: 0;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  @media ${device.tablet} {
    color: black;
    order: 1;
    line-height: 1.5;
    width: 100% !important;
    white-space: inherit;
    text-overflow: inherit;
  }
`

const ActionButtons = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`

const RemoveButton = styled.button`
  background: #fbebe9;
  padding: 1.6rem 2rem;
  border-radius: 10px;
  margin-left: 2rem;
  cursor: pointer;  

  @media ${device.tablet} {
    display: none;
  }
`

const ViewButton = styled.button`
  background: #f1f1f2;
  padding: 1.6rem 2rem;
  border-radius: 10px;
  margin-left: 2rem;
  cursor: pointer;

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
