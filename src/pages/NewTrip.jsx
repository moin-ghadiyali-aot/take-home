import React, { useContext } from 'react'
import styled from 'styled-components'
import Dropdown from 'react-dropdown'
import DatePicker from 'react-datepicker'
import 'react-dropdown/style.css'
import 'react-datepicker/dist/react-datepicker.css'

//import { api } from 'services/httpService'
import { TripContext } from 'contexts/TripContext'

import Heading from 'components/Heading'
import SidebarTripRow from 'components/SidebarTripRow'
import { device } from 'style/responsive'
import Sidebar from 'components/Sidebar'
import { ReactComponent as Check } from 'assets/Check.svg'

const NewTrip = () => {
  // THIS IS THE MAIN STATE WHICH HOLD ALL TRIPS, FORM DATA AND COUNTRIES FETCHED FROM API (state.trips, state.form, state.countries)
  const [state, dispatch] = useContext(TripContext)

  // DO YOUR API CALL HERE
  const addNewTrip = () => {
    console.log(state.form)

    /* Now here you can do api call to post the form */
    // try {
    /* first you do api call */
    // const response = await axios.post('/trips', {})

    /* if api finished successfully and new trip was saved
        you can dispatch command to append that new trip to current list
        dispatch command will trigger reducer action called ADD_TRIP and append
        the new trip to current trip list
      */
    // dispatch({ type: 'ADD_TRIP', payload: response.data })

    // } catch (e) {
    /* handle error here...*/
    // }
  }

  return (
    <Container>
      <Main>
        <Heading title="New trip" />

        <Form>
          <FormContent>
            <InnerForm>
              <FormGroup>
                <Label htmlFor="countries">Where do you want to go</Label>
                <Dropdown
                  className={state.selectedCountry}
                  id="country"
                  name="country"
                  options={state.countries}
                  placeholder="Select country"
                  onChange={data => {
                    dispatch({
                      type: 'SET_FORM',
                      payload: { key: 'country', value: data.value },
                    })
                    dispatch({
                      type: 'SET_SELECTED_COUNTRY',
                      payload: data.value,
                    })
                  }}
                />
              </FormGroup>

              <FormGroup>
                <FormInnerGroup>
                  <Label htmlFor="startDate">Start date</Label>
                  <DatePickerWrap>
                    <DatePicker
                      selected={state.form.startDate}
                      onChange={date => {
                        dispatch({
                          type: 'SET_FORM',
                          payload: { key: 'startDate', value: date },
                        })
                      }}
                      id="startDate"
                      name="startDate"
                      placeholderText="dd. mm. year"
                      showPopperArrow={false}
                      selectsStart
                      startDate={state.form.startDate}
                      endDate={state.form.endDate}
                    />
                  </DatePickerWrap>
                </FormInnerGroup>

                <FormInnerGroup>
                  <Label htmlFor="endDate">End date</Label>
                  <DatePickerWrap>
                    <DatePicker
                      selected={state.form.endDate}
                      onChange={date => {
                        dispatch({
                          type: 'SET_FORM',
                          payload: { key: 'endDate', value: date },
                        })
                      }}
                      id="endDate"
                      name="endDate"
                      placeholderText="dd. mm. year"
                      showPopperArrow={false}
                      selectsEnd
                      startDate={state.form.startDate}
                      endDate={state.form.EndDate}
                      minDate={state.form.startDate}
                    />
                  </DatePickerWrap>
                </FormInnerGroup>
              </FormGroup>

              <FormGroup>
                <FormInnerGroup>
                  <Label htmlFor="company">Company name</Label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Type here..."
                    onChange={e => {
                      dispatch({
                        type: 'SET_FORM',
                        payload: { key: 'company', value: e.target.value },
                      })
                    }}
                    value={state.form.company}
                  />
                </FormInnerGroup>

                <FormInnerGroup>
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    name="city"
                    placeholder="Type here..."
                    onChange={e => {
                      dispatch({
                        type: 'SET_FORM',
                        payload: { key: 'city', value: e.target.value },
                      })
                    }}
                    value={state.form.city}
                  />
                </FormInnerGroup>

                <FormInnerGroup>
                  <Label htmlFor="street">Street</Label>
                  <Input
                    id="street"
                    name="street"
                    placeholder="Type here..."
                    onChange={e => {
                      dispatch({
                        type: 'SET_FORM',
                        payload: { key: 'street', value: e.target.value },
                      })
                    }}
                    value={state.form.street}
                  />
                </FormInnerGroup>

                <FormInnerGroup>
                  <Label htmlFor="streetNumber">Street number</Label>
                  <Input
                    id="streetNumber"
                    name="streetNumber"
                    placeholder="Type here..."
                    onChange={e => {
                      dispatch({
                        type: 'SET_FORM',
                        payload: { key: 'streetNumber', value: e.target.value },
                      })
                    }}
                    value={state.form.streetNumber}
                  />
                </FormInnerGroup>

                <FormInnerGroup>
                  <Label htmlFor="zipCode">Zip code</Label>
                  <Input
                    id="zipCode"
                    name="zipCode"
                    placeholder="Type here..."
                    onChange={e => {
                      dispatch({
                        type: 'SET_FORM',
                        payload: { key: 'zipCode', value: e.target.value },
                      })
                    }}
                    value={state.form.zipCode}
                  />
                </FormInnerGroup>
              </FormGroup>

              <FormGroup>
                <LabelQuestion>
                  Have you been recently tested for <strong>COVID-19</strong>
                </LabelQuestion>
                <RadioButtonGroup>
                  <RadioButton>
                    <input
                      type="radio"
                      name="testedCovid"
                      id="yes"
                      value="0"
                      onChange={() => {
                        dispatch({
                          type: 'SET_FORM',
                          payload: { key: 'testedCovid', value: true },
                        })
                      }}
                    />
                    <div />
                    <span>Yes</span>
                  </RadioButton>
                  <RadioButton>
                    <input
                      type="radio"
                      name="testedCovid"
                      id="no"
                      value="1"
                      onChange={() => {
                        dispatch({
                          type: 'SET_FORM',
                          payload: { key: 'testedCovid', value: false },
                        })
                      }}
                    />
                    <div />
                    <span>No</span>
                  </RadioButton>
                </RadioButtonGroup>
              </FormGroup>
            </InnerForm>
          </FormContent>

          <FormFooter>
            <Button type="button" onClick={addNewTrip}>
              Save
              <Check width={16} height={12} />
            </Button>
          </FormFooter>
        </Form>
      </Main>
      <Sidebar sidebarHeading="Trips">
        <SidebarTripRow
          country="Austria"
          company="Diamler AG"
          address="Mercedes-Benz Plant Berlin' Daimlerstraße 143, 12277 Berlin"
          date="Jul 14 - Sep 20, 2019"
        />
        <SidebarTripRow
          country="United Kingdom"
          company="Diamler AG"
          address="Mercedes-Benz Plant Berlin' Daimlerstraße 143, 12277 Berlin"
          date="Jul 14 - Sep 20, 2019"
        />
      </Sidebar>
    </Container>
  )
}

export default NewTrip

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

const FormInnerGroup = styled.div`
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

const Label = styled.label`
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
    color: #d0d0ce;
  }

  &:focus {
    border: 1px solid #ccc;
  }

  &.react-datepicker-ignore-onclickoutside {
    border-radius: 10px 10px 0 0 !important;
  }
`

const RadioButtonGroup = styled.div`
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
    background: #f8d964;
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
