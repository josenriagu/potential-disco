import React from "react";
import { useParams } from "react-router-dom";

import { SingleCountryDiv } from "./index.styled";

export default function SingleCountry(props) {
  const { history } = props;

  let { code } = useParams();
  let borders = [];
  const countries = JSON.parse(localStorage.getItem("countries"));
  const found = countries.find((country) => country.alpha2Code === code);

  found.borders.map((border) => {
    let matching = countries.find((country) => country.alpha3Code === border);
    borders.push(matching);
    return border;
  });

  return (
    <SingleCountryDiv>
      <div>
        <img src={found.flag} alt={`${found.name} flag`} />
      </div>
      <div>
        <h5>{found.name}</h5>
        <p>
          <strong>Native Name: </strong>
          {found.nativeName}
        </p>
        <p className="d">
          <strong>Top Level Domain: </strong>
          {found.topLevelDomain}
        </p>
        <p>
          <strong>Population: </strong>
          {found.population}
        </p>
        <p className="d">
          <strong>Currencies: </strong>
          {found.currencies.map((currency) => currency.name).join(", ")}
        </p>
        <p>
          <strong>Region: </strong>
          {found.region}
        </p>
        <p className="d">
          <strong>Languages: </strong>
          {found.languages.map((language) => language.name).join(", ")}
        </p>
        <p id="subr">
          <strong>Sub Region: </strong>
          {found.subregion}
        </p>
        <p>
          <strong>Capital: </strong>
          {found.capital}
        </p>
        <p className="m tl">
          <strong>Top Level Domain: </strong>
          {found.topLevelDomain}
        </p>
        <p className="m">
          <strong>Currencies: </strong>
          {found.currencies.map((currency) => currency.name).join(", ")}
        </p>
        <p className="m">
          <strong>Languages: </strong>
          {found.languages.map((language) => language.name).join(", ")}
        </p>
        <p id="border">
          <strong>Border Countries: </strong>
          {borders.map((border, id) => (
            <span
              key={id}
              onClick={() => history.push(`/${border?.alpha2Code}`)}
            >
              {border.name}
            </span>
          ))}
        </p>
      </div>
    </SingleCountryDiv>
  );
}
