import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { globeIcon as GlobeIcon } from 'assets/icons';
import { ReactComponent as Netherlands } from 'assets/flags/netherlands.svg';
import TripsSidebar from './n';

import Select, { components } from 'react-select';

const NewTrip = () => {
  const [countries, setCountries] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [company, setCompany] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [streetNumber, setStreetNumber] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [testedCovid, setTestedCovid] = useState(null);

  useEffect(() => {
    fetchData();
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
    console.log(sortedData);
    setCountries(sortedData);
    console.log('fetched', sortedData);
  };

  const CustomOption = ({ innerRef, innerProps, data }) => {
    // console.log(innerProps);
    const Flag = flagsMapping[data.value];
    return (
      <SelectPropOption ref={innerRef} {...innerProps}>
        {Flag && <Flag style={{ width: '15px', marginRight: '10px' }} />}
        {data.label}
      </SelectPropOption>
    );
  };

  const SingleValue = ({ children, ...props }) => {
    console.log(props);
    const Flag = flagsMapping[props.data.value];
    return (
      <components.SingleValue {...props}>
        {Flag && <Flag style={{ width: '15px', marginRight: '10px' }} />}
        {children}
      </components.SingleValue>
    );
  };

  const Placeholder = (props) => {
    console.log(props);
    return (
      <components.Placeholder {...props}>
        {GlobeIcon}
        {props.children}
      </components.Placeholder>
    );
  };

  return (
    <Container>
      <Main>
        <Heading>New trip</Heading>
        <Form>
          <FormGroup>
            <label for="countries">Where do you want to go</label>
            <Select
              placeholder="Select Country"
              onChange={() => {}}
              components={{ Option: CustomOption, Placeholder, SingleValue }}
              options={countries}
            />
            <select name="countries">
              {/* TODO: cant insert globeIcon */}
              <option>
                {' '}
                <GlobeIcon height="20px" /> Select Country
              </option>
              {countries.map((country) => {
                const Flag = flagsMapping[country.value];
                return (
                  <option value={country.label}>
                    <Flag />
                    {country.label}
                  </option>
                );
              })}
            </select>
          </FormGroup>

          <FormGroup>
            {/* TODO: change placeholder on date picker and style it */}
            <label for="start-date">Start date</label>
            <input id="start-date" type="date" placeholder="dd.mm.year" />

            <label for="end-date">End date</label>
            <input id="end-date" type="date" />
          </FormGroup>

          <FormGroup>
            <label for="company">Company name</label>
            <input id="company" name="company" placeholder="Type here..." />

            <label for="street">Street</label>
            <input id="street" name="street" placeholder="Type here..." />

            <label for="street-number">Street number</label>
            <input
              id="street-number"
              name="street-number"
              placeholder="Type here..."
            />

            <label for="city">City</label>
            <input id="city" name="city" placeholder="Type here..." />

            <label for="zip-code">Zip code</label>
            <input id="zip-code" name="zip-code" placeholder="Type here..." />
          </FormGroup>

          <FormGroup>
            <label for="tested-covid">
              Have you been recently tested for <strong>COVID-19</strong>
            </label>
            {/* TODO: error "input a void element tag" */}
            <input
              id="tested-covid"
              type="radio"
              checked={testedCovid === true}
              onClick={() => setTestedCovid(true)}
            />
            Yes
            <input
              id="tested-covid"
              type="radio"
              checked={testedCovid === false}
              onClick={() => setTestedCovid(false)}
            />
            No
          </FormGroup>
        </Form>
      </Main>

      <TripsSidebar />
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

  > label {
    padding-bottom: 0.75rem;
  }

  > input {
    padding: 0.75rem;
    border-radius: 5px;
    border: none;
    margin-bottom: 1.5rem;
  }
`;

const SelectPropOption = styled.div`
  padding: 5px;
  font-size: 14px;
  &:hover {
    background: #ccc;
  }
`;
