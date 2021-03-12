import styled from "styled-components";

import DatePicker from "react-date-picker";
import { useState } from "react";

const DateInput = ({ id, name }) => {
  const [value, onChange] = useState(new Date());
  return (
    <>
      {/* <input id={id} type="date" placeholder="dd.mm.year" name={name} /> */}
      <DatePickerStyled>
        <DatePicker
          name={name}
          format={"dd .MM .yyyy"}
          onChange={onChange}
          value={value}
          calendarIcon=""
          clearIcon=""
        />
      </DatePickerStyled>
    </>
  );
};

export default DateInput;

const DatePickerStyled = styled.div`
  .react-date-picker {
    width: 100%;
    cursor: pointer;
    .react-date-picker__clear-button,
    react-date-picker__calendar-button {
      display: none;
    }
  }
`;
