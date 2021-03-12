import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components'

import { globeIcon as GlobeIcon } from 'assets/icons';
import { ReactComponent as Netherlands } from 'assets/flags/netherlands.svg';
import Sidebar from 'components/Sidebar'

const NewTrip = () => {
  const [countries, setCountries] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [company, setCompany] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [streetNumber, setStreetNumber] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [testedCovid, setTestedCovid] = useState(false);

  useEffect(() => {
    fetchData()
  }, []);

  //  TODO: cant insert flags
  const flagsMapping = {
    aw: Netherlands,
  };

  const fetchData = async () => {
    const { data } = await axios.get(
      'https://task-devel.cleevio-vercel.vercel.app/api/country'
    );
    const sortedData = data.sort((a, b) => (a.label > b.label ? 1 : -1));
    console.log(data);
    setCountries(sortedData);
    console.log('fetched', sortedData);
  }

  return (
    <Container>
      <Main>
      <Heading>New trip</Heading>
      <Form>
        <FormGroup>
        
          <label for='countries'>Where do you want to go</label>
          <select name='countries'>
          {/* TODO: cant insert globeIcon */}
            <option> <img src={GlobeIcon} alt='' height='20px'/> Select Country</option>
            {countries.map(country => (
            <option value={country.label}>{country.label}</option>
            ))}
          </select>
            

        </FormGroup>

        <FormGroup>
          {/* TODO: change placeholder on date picker and style it */}
          <Label for='startDate'>Start date</Label>
          <input
            id='startDate'
            type='date'
            placeholder='dd.mm.year'
            name='startDate'
            onChange={e => setStartDate(e.target.value)}
            value={startDate}
          />

          <Label for='endDate'>End date</Label>
          <Input
            id='endDate'
            type='date'
            name='endDate'
            onChange={e => setEndDate(e.target.value)}
            value={endDate}
          />

        </FormGroup>

        <FormGroup>
          
          <Label for='company'>Company name</Label>
          <Input
            id='company'
            name='company'
            placeholder='Type here...'
            onChange={e => setCompany(e.target.value)}
            value={company}
          />

          <Label for='street'>Street</Label>
          <Input
            id='street'
            name='street'
            placeholder='Type here...'
            onChange={e => setStreet(e.target.value)}
            value={street}
          />

          <Label for='streetNumber'>Street number</Label>
          <Input
            id='streetNumber'
            name='streetNumber'
            placeholder='Type here...'
            onChange={e => setStreetNumber(e.target.value)}
            value={streetNumber}
          />

          <Label for='city'>City</Label>
          <Input
            id='city'
            name='city'
            placeholder='Type here...'
            onChange={e => setCity(e.target.value)}
            value={city}
          />

          <Label for='zipCode'>Zip code</Label>
          <Input
            id='zipCode'
            name='zipCode'
            placeholder='Type here...'
            onChange={e => setZipCode(e.target.value)}
            value={zipCode}
          />

        </FormGroup>

        <FormGroup>

          <label for='tested-covid'>Have you been recently tested for <strong>COVID-19</strong></label>
          {/* TODO: error "input a void element tag" */}
          {/* <input id='tested-covid' type='radio'>Yes</input> */}
          {/* <input id='tested-covid' type='radio'>No</input> */}

        </FormGroup>

        <Button type='submit'>Save</Button>

      </Form>

      </Main>

      <Sidebar />
    </Container>
  );
};

export default NewTrip;

const Container = styled.div`
  display: flex;
`;
const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
const Heading = styled.h1`
  padding: 2rem;
  border-bottom: 1px solid var(--grey);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const FormGroup = styled.div`
  background-color: var(--grey);
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 5px;
`
const Label = styled.label`
  padding-bottom: .75rem;
`
const Input = styled.input`
  padding: .75rem;
    border-radius: 5px;
    border: none;
    margin-bottom: 1.5rem;
`
const Button = styled.button`

`