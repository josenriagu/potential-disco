import React from "react";

import Card from "../card";

import { AllCountriesDiv } from "./index.styled";

export default function AllCountries(props) {
  const { countries, history } = props;
  return (
    <AllCountriesDiv>
      {countries &&
        countries.map((country) => (
          <Card key={country.alpha2Code} country={country} history={history} />
        ))}
    </AllCountriesDiv>
  );
}
