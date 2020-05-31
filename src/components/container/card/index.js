import React from "react";

import { CardDiv } from "./index.styled";

export default function Card(props) {
  const { country, history } = props;

  return (
    <CardDiv onClick={() => history.push(`/${country?.alpha2Code}`)}>
      <img src={country?.flag} alt={`${country?.name} flag`} />
      <article>
        <h5>{country?.name}</h5>
        <p>
          <strong>Population: </strong>
          {country?.population}
        </p>
        <p>
          <strong>Region: </strong>
          {country?.region}
        </p>
        <p>
          <strong>Capital: </strong>
          {country?.capital}
        </p>
      </article>
    </CardDiv>
  );
}
