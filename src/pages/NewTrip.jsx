import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import { globeIcon as GlobeIcon } from 'assets/icons'
import { ReactComponent as Netherlands } from 'assets/flags/netherlands.svg'
import Sidebar from 'components/Sidebar'

const NewTrip = () => {
  const [countries, setCountries] = useState([])
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [company, setCompany] = useState('')
  const [city, setCity] = useState('')
  const [street, setStreet] = useState('')
  const [streetNumber, setStreetNumber] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [testedCovid, setTestedCovid] = useState(false)

  useEffect(() => {
    fetchData()
  }, [])

  //  TODO: cant insert flags
  const flagsMapping = {
    aw: Netherlands,
  }

  const fetchData = async () => {
    const { data } = await axios.get(
      'https://task-devel.cleevio-vercel.vercel.app/api/country',
    )
    const sortedData = data.sort((a, b) => (a.label > b.label ? 1 : -1))
    console.log(data)
    setCountries(sortedData)
    console.log('fetched', sortedData)
  }

  const defaultOption = countries[0]

  return (
    <Container>
      <Main>
        <Heading>New trip</Heading>
        <Form>
          <InnerForm>
            <FormGroup>
              <Label htmlFor="countries">Where do you want to go</Label>
              <Dropdown
                id="countries"
                options={countries}
                placeholder="Select country"
              />
            </FormGroup>

            <FormGroup>
              {/* TODO: change placeholder on date picker and style it */}
              <FormInnerGroup>
                <Label htmlFor="startDate">Start date</Label>
                <DatePicker
                  selected={startDate}
                  onChange={date => setStartDate(date)}
                  placeholderText="dd. mm. year"
                />
              </FormInnerGroup>

              <FormInnerGroup>
                <Label htmlFor="endDate">End date</Label>
                <DatePicker
                  selected={endDate}
                  onChange={date => setEndDate(date)}
                  placeholderText="dd. mm. year"
                />
              </FormInnerGroup>
            </FormGroup>

            <FormGroup>
              <FormInnerGroup>
                <Label htmlFor="company">Company name</Label>
                <Input
                  id="company"
                  name="company"
                  placeholder="Type here..."
                  onChange={e => setCompany(e.target.value)}
                  value={company}
                />
              </FormInnerGroup>

              <FormInnerGroup>
                <Label htmlFor="city">City</Label>
                <Input
                  id="city"
                  name="city"
                  placeholder="Type here..."
                  onChange={e => setCity(e.target.value)}
                  value={city}
                />
              </FormInnerGroup>

              <FormInnerGroup>
                <Label htmlFor="street">Street</Label>
                <Input
                  id="street"
                  name="street"
                  placeholder="Type here..."
                  onChange={e => setStreet(e.target.value)}
                  value={street}
                />
              </FormInnerGroup>

              <FormInnerGroup>
                <Label htmlFor="streetNumber">Street number</Label>
                <Input
                  id="streetNumber"
                  name="streetNumber"
                  placeholder="Type here..."
                  onChange={e => setStreetNumber(e.target.value)}
                  value={streetNumber}
                />
              </FormInnerGroup>

              <FormInnerGroup>
                <Label htmlFor="zipCode">Zip code</Label>
                <Input
                  id="zipCode"
                  name="zipCode"
                  placeholder="Type here..."
                  onChange={e => setZipCode(e.target.value)}
                  value={zipCode}
                />
              </FormInnerGroup>
            </FormGroup>

            <FormGroup>
              <Label htmlFor="tested-covid">
                Have you been recently tested for <strong>COVID-19</strong>
              </Label>
              <RadioButtonGroup>
                <RadioButton>
                  <input type="radio" name="testedCovid" id="yes" value="0" />
                  <div />
                  <span>Yes</span>
                </RadioButton>
                <RadioButton>
                  <input type="radio" name="testedCovid" id="no" value="1" />
                  <div />
                  <span>No</span>
                </RadioButton>
              </RadioButtonGroup>
              {/* TODO: error "input a void element tag" */}
              {/* <input id='tested-covid' type='radio'>Yes</input> */}
              {/* <input id='tested-covid' type='radio'>No</input> */}
            </FormGroup>
          </InnerForm>

          <FormFooter>
            <Button type="submit">Save</Button>
          </FormFooter>
        </Form>
      </Main>
      <Sidebar />
    </Container>
  )
}

export default NewTrip

const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  flex: 1;
  width: 100%;
`
const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
`
const Heading = styled.h1`
  padding: 2.5rem 3rem;
  border-bottom: 1px solid var(--grey);
  width: 100%;
  font-size: 2.5rem;
  border-bottom: 1px solid #eee;
  margin-bottom: 24px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  align-items: center;
`

const InnerForm = styled.div`
  width: 100%;
  flex: 1;
  max-width: 540px;
`

const FormFooter = styled.div`
  width: 100%;
  border-top: 1px solid #eee;
  padding: 2rem 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

const FormGroup = styled.div`
  background-color: var(--grey);
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border-radius: 5px;
  margin-bottom: 2rem;

  strong {
    font-weight: bold;
  }
`

const FormInnerGroup = styled.div`
  margin-top: 2rem;
  width: 100%;

  &:first-child {
    margin-top: 0;
  }
`

const Label = styled.label`
  display: block;
  font-size: 16px;
  margin-bottom: 10px;
`

const Input = styled.input`
  padding: 1.25rem 1.6rem;
  border-radius: 10px;
  border: none;
  font-size: 1.6rem;
  border: 1px solid #eee;
  outline: 0;
  display: block;
  width: 100%;
  font-size: 1.4rem;

  &:focus {
    border: 1px solid #ccc;
  }
`

const RadioButtonGroup = styled.div`
  display: flex;
  margin-top: 1.4rem;
`

const RadioButton = styled.label`
  position: relative;
  padding: 1.4rem 2rem;
  border-radius: 10px;
  background: #eee;
  color: #525659;
  font-weight: 600;
  margin-right: 20px;
  padding-left: 40px;
  font-size: 1.6rem;

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
    left: 14px;
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

const Button = styled.button`
  background: var(--accent);
  font-size: 1.6rem;
  padding: 1.8rem;
  flex: 1;
  max-width: 220px;
  border-radius: 10px;
  font-weight: 600;
`
