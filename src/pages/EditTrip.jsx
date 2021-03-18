import { useContext, useEffect } from 'react'
import styled from 'styled-components'
import Dropdown from 'react-dropdown'
import DatePicker from 'react-datepicker'
import { useParams } from 'react-router-dom'
import moment from 'moment'
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

import Heading from 'components/Heading'
import Sidebar from 'components/Sidebar'

import { TripContext } from 'contexts/TripContext'
import { api } from 'services/httpService'
import { motion, useAnimation } from 'framer-motion'
import { device } from 'style/responsive'
import { ReactComponent as Check } from 'assets/Check.svg'
import 'react-dropdown/style.css'
import 'react-datepicker/dist/react-datepicker.css'
import SidebarCard from 'components/SidebarCard'
import Loader from 'react-loader-spinner'

const EditTrip = () => {
  const [state, dispatch] = useContext(TripContext)
  const { id } = useParams()
  const xValues = [5000, -40, 0]

  const editTrip = async () => {
    try {
      const response = await api.put(`/trip/${id}`, state.form, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Headers':
            'Origin, X-Requested-With, Content-Type, Accept, Authorization',
          'Access-Control-Request-Method': 'GET, POST, DELETE, PUT, OPTIONS',
        },
      })
      dispatch({ type: 'EDIT_TRIP', payload: response.data })
    } catch (e) {
      console.error(e)
    }
  }

  const FlagIcon = ({ flag }) => {
    switch (flag) {
      case 'Austria':
        return <AustriaFlag width={40} height={40} />
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

  const FlagName = ({ flag }) => {
    switch (flag) {
      case 'at':
        return 'Austria'
      case 'cn':
        return 'China'
      case 'fr':
        return 'France'
      case 'gr':
        return 'Greece'
      case 'it':
        return 'Italy'
      case 'aw':
        return 'Netherlands'
      case 'pt':
        return 'Portugal'
      case 'sk':
        return 'Slovakia'
      case 'es':
        return 'Spain'
      case 'se':
        return 'Sweden'
      case 'uk':
        return 'United Kingdom'
      default:
        return null
    }
  }  

  useEffect(() => {
    const fetchTrip = async () => {
      const { data } = await api.get(`/trip/${id}`)
      dispatch({ type: 'SET_FORM', payload: data })
    }
    fetchTrip()
  }, [id, dispatch])

  const startDate =
    state.form.start_date !== ''
      ? moment(state.form.start_date, 'YYYY-MM-DD').toDate()
      : ''

  const endDate =
    state.form.end_date !== ''
      ? moment(state.form.end_date, 'YYYY-MM-DD').toDate()
      : ''

  return (
    <Container>
      <Main>
        <Heading title="Edit trip" />

        <Form>
          <FormContent>
            <InnerForm>
              <FormGroup>
                {/* <FormInnerGroup
                  animate={{ x: xValues }}
                  transition={{ duration: 1 }}
                > */}
                <DPDown animate={{ x: xValues }} transition={{ duration: 1 }}>
                  <Label htmlFor="countries">Where do you want to go</Label>
                  <Dropdown
                    required
                    className={state.selectedCountry}
                    id="country"
                    name="country"
                    options={state.countries}
                    placeholder={state.form.address.country || 'Select country'}
                    value={state.form.address.country}
                    onChange={data => {
                      dispatch({
                        type: 'SET_FORM',
                        payload: {
                          address: {
                            country: data.value,
                          },
                        },
                      })
                      dispatch({
                        type: 'SET_SELECTED_COUNTRY',
                        payload: data.value,
                      })
                    }}
                  />
                </DPDown>
                {/* </FormInnerGroup> */}
              </FormGroup>

              <FormGroup>
                <FormInnerGroup
                  animate={{ x: xValues, opacity: [0, 0.3, 1] }}
                  transition={{ duration: 1, delay: 0.1 }}
                >
                  <Label htmlFor="startDate">Start date</Label>
                  <DatePickerWrap>
                    <DatePicker
                      required
                      selected={moment(state.form.start_date).toDate()}
                      excludeTimes
                      onChange={date => {
                        dispatch({
                          type: 'SET_FORM',
                          payload: {
                            start_date: date,
                          },
                        })
                      }}
                      id="startDate"
                      name="startDate"
                      showPopperArrow={false}
                      selectsStart
                      dateFormat="dd. MM. yyyy"
                      value={startDate}
                      minDate={moment().toDate()}
                      // startDate={startDate}
                      // endDate={endDate}
                    />
                  </DatePickerWrap>
                </FormInnerGroup>

                <FormInnerGroup
                  animate={{ x: xValues }}
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  <Label htmlFor="endDate">End date</Label>
                  <DatePickerWrap>
                    <DatePicker
                      required
                      selected={
                        state.form.end_date !== ''
                          ? moment(state.form.end_date).toDate()
                          : ''
                      }
                      onChange={date => {
                        dispatch({
                          type: 'SET_FORM',
                          payload: {
                            end_date: date,
                          },
                        })
                      }}
                      id="endDate"
                      name="endDate"
                      dateFormat="dd. MM. yyyy"
                      placeholderText="dd. mm. year"
                      showPopperArrow={false}
                      selectsEnd
                      value={endDate}
                      // startDate={startDate}
                      // endDate={endDate}
                      // minDate={startDate}
                    />
                  </DatePickerWrap>
                </FormInnerGroup>
              </FormGroup>

              <FormGroup>
                <FormInnerGroup
                  animate={{ x: xValues }}
                  transition={{ duration: 1, delay: 0.3 }}
                >
                  <Label htmlFor="company">Company name</Label>
                  <Input
                    required
                    id="company"
                    name="company"
                    placeholder={state.form.company_name || 'Type here ...'}
                    onChange={e => {
                      dispatch({
                        type: 'SET_FORM',
                        payload: {
                          company_name: e.target.value,
                        },
                      })
                    }}
                    value={state.form.company_name}
                  />
                </FormInnerGroup>

                <FormInnerGroup
                  animate={{ x: xValues }}
                  transition={{ duration: 1, delay: 0.4 }}
                >
                  <Label htmlFor="city">City</Label>
                  <Input
                    required
                    id="city"
                    name="city"
                    placeholder={state.form.address.city || 'Type here ...'}
                    onChange={e => {
                      dispatch({
                        type: 'SET_FORM',
                        payload: {
                          address: {
                            city: e.target.value,
                          },
                        },
                      })
                    }}
                    value={state.form.address.city}
                  />
                </FormInnerGroup>

                <FormInnerGroup
                  animate={{ x: xValues }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <Label htmlFor="street">Street</Label>
                  <Input
                    required
                    id="street"
                    name="street"
                    placeholder={state.form.address.street || 'Type here ...'}
                    onChange={e => {
                      dispatch({
                        type: 'SET_FORM',
                        payload: {
                          address: {
                            street: e.target.value,
                          },
                        },
                      })
                    }}
                    value={state.form.address.street}
                  />
                </FormInnerGroup>

                <FormInnerGroup
                  animate={{ x: xValues }}
                  transition={{ duration: 1, delay: 0.6 }}
                >
                  <Label htmlFor="streetNumber">Street number</Label>
                  <Input
                    required
                    id="streetNumber"
                    name="streetNumber"
                    placeholder={
                      state.form.address.street_num || 'Type here ...'
                    }
                    onChange={e => {
                      dispatch({
                        type: 'SET_FORM',
                        payload: {
                          address: {
                            street_num: e.target.value,
                          },
                        },
                      })
                    }}
                    value={state.form.address.street_num}
                  />
                </FormInnerGroup>

                <FormInnerGroup
                  animate={{ x: xValues }}
                  transition={{ duration: 1, delay: 0.7 }}
                >
                  <Label htmlFor="zipCode">Zip code</Label>
                  <Input
                    required
                    id="zipCode"
                    name="zipCode"
                    type="number"
                    placeholder={state.form.address.zip || 'Type here ...'}
                    onChange={e => {
                      dispatch({
                        type: 'SET_FORM',
                        payload: {
                          address: {
                            zip: e.target.value,
                          },
                        },
                      })
                    }}
                    value={state.form.address.zip}
                  />
                </FormInnerGroup>
              </FormGroup>

              <FormGroup>
                <LabelQuestion>
                  Have you been recently tested for <strong>COVID-19</strong>
                </LabelQuestion>
                <RadioButtonGroup
                  animate={{ x: xValues }}
                  transition={{ duration: 1, delay: 0.8 }}
                >
                  <RadioButton>
                    <input
                      required
                      type="radio"
                      name="testedCovid"
                      id="yes"
                      value="0"
                      onChange={() => {
                        dispatch({
                          type: 'SET_FORM',
                          payload: {
                            covid: true,
                          },
                        })
                      }}
                      checked={state.form.covid === true}
                    />
                    <div />
                    <span>Yes</span>
                  </RadioButton>
                  <RadioButton>
                    <input
                      required
                      type="radio"
                      name="testedCovid"
                      id="no"
                      value="1"
                      onChange={() => {
                        dispatch({
                          type: 'SET_FORM',
                          payload: {
                            covid: false,
                          },
                        })
                      }}
                      checked={state.form.covid === false}
                    />
                    <div />
                    <span>No</span>
                  </RadioButton>
                </RadioButtonGroup>
              </FormGroup>
            </InnerForm>
          </FormContent>

          <FormFooter>
            <Button type="button" onClick={editTrip}>
              Save
              <Check width={16} height={12} />
            </Button>
          </FormFooter>
        </Form>
      </Main>
      <Sidebar sidebarHeading="Trips">
        {state.trips.length > 0 ? (
          state.trips.map(trip => (
            <SidebarCard
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
        )}
      </Sidebar>
    </Container>
  )
}

export default EditTrip

const StyledLoader = styled(Loader)`
  display: flex;
  justify-content: center;
  margin: 50px;
`

const DPDown = styled(motion.div)`
  
`

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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  width: 100%;
  align-items: center;
`

const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  width: 100%;
  align-items: center;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: white;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #ccc;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`

const DatePickerWrap = styled.div`
  position: relative;
  flex: 1;
  width: 100%;
`

const InnerForm = styled.div`
  width: 100%;
  flex: 1;
  max-width: 500px;
  padding: 5rem 0;

  @media ${device.tablet} {
    padding: 2rem;
  }
`

const FormGroup = styled.div`
  background-color: var(--grey);
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border-radius: 5px;
  margin-bottom: 1.5rem;

  strong {
    font-weight: bold;
  }
`

const FormInnerGroup = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: #f9f9fa;
  border-radius: 10px;

  margin-top: 2rem;
  width: 100%;

  &:first-child {
    margin-top: 0;
  }
`

const Label = styled(motion.label)`
  display: block;
  font-size: 1.4rem;
  margin-bottom: 2rem;
  color: black;
  display: block;
  width: 100%;
`

const LabelQuestion = styled.label`
  display: block;
  font-size: 1.4rem;
  color: black;
  display: block;
  width: 100%;

  strong {
    font-weight: 600;
  }

  @media ${device.tablet} {
    font-size: 1.2rem;
  }
`

const Input = styled.input`
  padding: 1.3rem 1.6rem;
  border-radius: 10px;
  border: none;
  font-size: 1.6rem;
  border: 1px solid #f1f1f2;
  outline: 0;
  display: block;
  width: 100%;
  font-size: 1.4rem;
  line-height: 2rem;

  &::placeholder {
    color: #76787b;
  }

  &:focus {
    border: 1px solid #ccc;
  }

  &.react-datepicker-ignore-onclickoutside {
    border-radius: 10px 10px 0 0 !important;
  }
`

const RadioButtonGroup = styled(motion.div)`
  display: flex;
  margin-top: 2rem;
`

const RadioButton = styled.label`
  position: relative;
  padding: 1rem 2rem;
  border-radius: 10px;
  background: #f1f1f2;
  color: #76787b;
  font-weight: 600;
  margin-right: 1rem;
  padding-left: 3.5rem;
  font-size: 1.6rem;
  line-height: 2rem;

  > input {
    opacity: 0;
    visibility: hidden;
    position: absolute;
  }

  > div {
    content: '';
    display: block;
    width: 16px;
    height: 16px;
    border-radius: 16px;
    border: 1px solid #d6d6d3;
    background: white;
    position: absolute;
    left: 10px;
    top: 50%;
    margin-top: -8px;
  }

  > div:before {
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 10px;
    background: black;
    position: absolute;
    left: 3px;
    top: 3px;
    opacity: 0;
    visibility: hidden;
  }

  > input:checked ~ div:before {
    opacity: 1;
    visibility: visible;
  }
`

const FormFooter = styled.div`
  width: 100%;
  border-top: 1px solid #f1f1f2;
  padding: 2rem 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Button = styled.button`
  background: var(--accent);
  font-size: 1.6rem;
  padding: 1.3rem 2rem;
  flex: 1;
  max-width: 200px;
  border-radius: 10px;
  font-weight: 600;
  text-align: left;
  display: flex;
  align-items: center;

  > svg {
    margin-left: auto;
  }
`
